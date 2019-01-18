const { prisma } = require("./generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");

const resolvers = {
  Query: {
    me(root, args, context) {
      return context.currentUser;
    },
    shops(root, args, context) {
      return context.prisma.shops();
    },
    users(root, args, context) {
      return context.prisma.users();
    },
    orders(root, args, context) {
      return context.prisma.orders();
    },
    order(root, args, context) {
      return context.prisma.order({ id: args.id });
    }
  },
  Shop: {
    creator(root, args, context) {
      return context.prisma.shop({ id: root.id }).creator();
    }
  },
  Order: {
    async status(root, args, context) {
      const order = await context.prisma.order({ id: root.id });
      if (order.deletedAt) {
        return "DELETED";
      } else if (Date.now() > Date(order.deletedAt)) {
        return "END";
      } else {
        return "OPEN";
      }
    },
    shop(root, args, context) {
      return context.prisma.order({ id: root.id }).shop();
    },
    items(root, args, context) {
      return context.prisma.order({ id: root.id }).items();
    },
    async creator(root, args, context) {
      return context.prisma.order({ id: root.id }).creator();
    }
  },
  OrderItem: {
    user(root, args, context) {
      return context.prisma.orderItem({ id: root.id }).user();
    }
  },

  Mutation: {
    createShop(root, args, context) {
      return context.prisma.createShop({
        name: args.name,
        address: args.address,
        phone: args.phone,
        creator: { connect: { id: context.currentUser.id } }
      });
    },
    updateShop(root, args, context) {
      const shop = context.prisma.shop({ id: args.id });
      if (!shop) {
        throw new Error(`Shop ${args.id} not found`);
      }
      if (context.currentUser.id !== shop.creator().id) {
        throw new Error(`You are not allowed to edit this shop.`);
      }
      return context.prisma.updateShop({
        data: {
          name: args.name,
          address: args.address,
          phone: args.phone
        },
        where: {
          id: args.id
        }
      });
    },
    async updateOrder(root, args, context) {
      const isOrderExist = prisma.$exists.order({
        id: args.id
      });
      if (!isOrderExist) {
        throw new Error(`Order ${args.id} not found`);
      }

      const creatorID = await context.prisma
        .order({ id: args.id })
        .creator()
        .id();

      if (context.currentUser.id !== creatorID) {
        throw new Error(`You are not allowed to edit this order.`);
      }
      return context.prisma.updateOrder({
        data: {
          title: args.title,
          endedAt: args.endedAt
        },
        where: {
          id: args.id
        }
      });
    },
    deleteOrder(root, args, context) {
      const isOrderExist = prisma.$exists.order({
        id: args.id
      });
      if (!isOrderExist) {
        throw new Error(`Order ${args.id} not found`);
      }

      return context.prisma.updateOrder({
        data: {
          deletedAt: new Date().toISOString()
        },
        where: { id: args.id }
      });
    },
    createOrder(root, args, context) {
      return context.prisma.createOrder({
        shop: { connect: { id: args.shopID } },
        creator: { connect: { id: context.currentUser.id } },
        title: args.title,
        endedAt: args.endedAt
      });
    },
    createOrderItem(root, args, context) {
      return context.prisma.createOrderItem({
        order: { connect: { id: args.orderID } },
        user: {
          connect: { id: context.currentUser.id }
        },
        name: args.name,
        price: args.price,
        variety: args.variety
      });
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers,
  context: async ({ req }) => {
    // fake current user util implementing authentication
    const currentUser = await prisma.user({ email: "admin@test.com" });

    return {
      prisma,
      currentUser
    };
  }
});

server.start(() => console.log("Server is running on http://localhost:4000"));
