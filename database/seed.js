const { prisma } = require("../generated/prisma-client");
const moment = require("moment");

async function main() {
  const adminUser = await prisma.createUser({
    email: "admin@test.com",
    isAdmin: true
  });

  const commonUser = await prisma.createUser({
    email: "test@test.com"
  });

  const shop = await prisma.createShop({
    name: "彰化鎮南宮",
    address: "I dont want to tell you",
    phone: "0988080080",
    creator: { connect: { id: adminUser.id } }
  });

  const orders = [];
  for (let i = 1; i <= 10; i++) {
    let order = await prisma.createOrder({
      shop: { connect: { id: shop.id } },
      creator: { connect: { id: adminUser.id } },
      title: `訂單 ${i} 號`,
      endedAt: moment()
        .add(i, "hours")
        .toISOString()
    });
    orders.push(order);
  }

  for (let i = 1; i <= 10; i++) {
    await prisma.createOrderItem({
      order: { connect: { id: orders[0].id } },
      user: {
        connect: { id: commonUser.id }
      },
      name: `保力達 P ${i}`,
      price: 99,
      variety: "勁量電池～ 加量不加價"
    });
  }
}

main();
