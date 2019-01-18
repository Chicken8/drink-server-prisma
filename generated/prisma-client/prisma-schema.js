module.exports = {
        typeDefs: /* GraphQL */ `type AggregateFile {
  count: Int!
}

type AggregateMenu {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateOrderItem {
  count: Int!
}

type AggregateShop {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type File {
  filename: String!
  mimetype: String!
  encoding: String!
}

type FileConnection {
  pageInfo: PageInfo!
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  filename: String!
  mimetype: String!
  encoding: String!
}

input FileCreateOneInput {
  create: FileCreateInput
}

type FileEdge {
  node: File!
  cursor: String!
}

enum FileOrderByInput {
  filename_ASC
  filename_DESC
  mimetype_ASC
  mimetype_DESC
  encoding_ASC
  encoding_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FilePreviousValues {
  filename: String!
  mimetype: String!
  encoding: String!
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FileWhereInput
  AND: [FileSubscriptionWhereInput!]
  OR: [FileSubscriptionWhereInput!]
  NOT: [FileSubscriptionWhereInput!]
}

input FileUpdateDataInput {
  filename: String
  mimetype: String
  encoding: String
}

input FileUpdateManyMutationInput {
  filename: String
  mimetype: String
  encoding: String
}

input FileUpdateOneRequiredInput {
  create: FileCreateInput
  update: FileUpdateDataInput
  upsert: FileUpsertNestedInput
}

input FileUpsertNestedInput {
  update: FileUpdateDataInput!
  create: FileCreateInput!
}

input FileWhereInput {
  filename: String
  filename_not: String
  filename_in: [String!]
  filename_not_in: [String!]
  filename_lt: String
  filename_lte: String
  filename_gt: String
  filename_gte: String
  filename_contains: String
  filename_not_contains: String
  filename_starts_with: String
  filename_not_starts_with: String
  filename_ends_with: String
  filename_not_ends_with: String
  mimetype: String
  mimetype_not: String
  mimetype_in: [String!]
  mimetype_not_in: [String!]
  mimetype_lt: String
  mimetype_lte: String
  mimetype_gt: String
  mimetype_gte: String
  mimetype_contains: String
  mimetype_not_contains: String
  mimetype_starts_with: String
  mimetype_not_starts_with: String
  mimetype_ends_with: String
  mimetype_not_ends_with: String
  encoding: String
  encoding_not: String
  encoding_in: [String!]
  encoding_not_in: [String!]
  encoding_lt: String
  encoding_lte: String
  encoding_gt: String
  encoding_gte: String
  encoding_contains: String
  encoding_not_contains: String
  encoding_starts_with: String
  encoding_not_starts_with: String
  encoding_ends_with: String
  encoding_not_ends_with: String
  AND: [FileWhereInput!]
  OR: [FileWhereInput!]
  NOT: [FileWhereInput!]
}

scalar Long

type Menu {
  id: ID!
  picture: File!
}

type MenuConnection {
  pageInfo: PageInfo!
  edges: [MenuEdge]!
  aggregate: AggregateMenu!
}

input MenuCreateInput {
  picture: FileCreateOneInput!
}

input MenuCreateOneInput {
  create: MenuCreateInput
  connect: MenuWhereUniqueInput
}

type MenuEdge {
  node: Menu!
  cursor: String!
}

enum MenuOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MenuPreviousValues {
  id: ID!
}

type MenuSubscriptionPayload {
  mutation: MutationType!
  node: Menu
  updatedFields: [String!]
  previousValues: MenuPreviousValues
}

input MenuSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MenuWhereInput
  AND: [MenuSubscriptionWhereInput!]
  OR: [MenuSubscriptionWhereInput!]
  NOT: [MenuSubscriptionWhereInput!]
}

input MenuUpdateDataInput {
  picture: FileUpdateOneRequiredInput
}

input MenuUpdateInput {
  picture: FileUpdateOneRequiredInput
}

input MenuUpdateOneInput {
  create: MenuCreateInput
  update: MenuUpdateDataInput
  upsert: MenuUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: MenuWhereUniqueInput
}

input MenuUpsertNestedInput {
  update: MenuUpdateDataInput!
  create: MenuCreateInput!
}

input MenuWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  picture: FileWhereInput
  AND: [MenuWhereInput!]
  OR: [MenuWhereInput!]
  NOT: [MenuWhereInput!]
}

input MenuWhereUniqueInput {
  id: ID
}

type Mutation {
  createFile(data: FileCreateInput!): File!
  updateManyFiles(data: FileUpdateManyMutationInput!, where: FileWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  createMenu(data: MenuCreateInput!): Menu!
  updateMenu(data: MenuUpdateInput!, where: MenuWhereUniqueInput!): Menu
  upsertMenu(where: MenuWhereUniqueInput!, create: MenuCreateInput!, update: MenuUpdateInput!): Menu!
  deleteMenu(where: MenuWhereUniqueInput!): Menu
  deleteManyMenus(where: MenuWhereInput): BatchPayload!
  createOrder(data: OrderCreateInput!): Order!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  createOrderItem(data: OrderItemCreateInput!): OrderItem!
  updateOrderItem(data: OrderItemUpdateInput!, where: OrderItemWhereUniqueInput!): OrderItem
  updateManyOrderItems(data: OrderItemUpdateManyMutationInput!, where: OrderItemWhereInput): BatchPayload!
  upsertOrderItem(where: OrderItemWhereUniqueInput!, create: OrderItemCreateInput!, update: OrderItemUpdateInput!): OrderItem!
  deleteOrderItem(where: OrderItemWhereUniqueInput!): OrderItem
  deleteManyOrderItems(where: OrderItemWhereInput): BatchPayload!
  createShop(data: ShopCreateInput!): Shop!
  updateShop(data: ShopUpdateInput!, where: ShopWhereUniqueInput!): Shop
  updateManyShops(data: ShopUpdateManyMutationInput!, where: ShopWhereInput): BatchPayload!
  upsertShop(where: ShopWhereUniqueInput!, create: ShopCreateInput!, update: ShopUpdateInput!): Shop!
  deleteShop(where: ShopWhereUniqueInput!): Shop
  deleteManyShops(where: ShopWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Order {
  id: ID!
  shop: Shop
  creator: User!
  endedAt: DateTime!
  title: String!
  items(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderItem!]
  deletedAt: DateTime
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  shop: ShopCreateOneWithoutOrdersInput
  creator: UserCreateOneInput!
  endedAt: DateTime!
  title: String!
  items: OrderItemCreateManyWithoutOrderInput
  deletedAt: DateTime
}

input OrderCreateManyWithoutShopInput {
  create: [OrderCreateWithoutShopInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateOneWithoutItemsInput {
  create: OrderCreateWithoutItemsInput
  connect: OrderWhereUniqueInput
}

input OrderCreateWithoutItemsInput {
  shop: ShopCreateOneWithoutOrdersInput
  creator: UserCreateOneInput!
  endedAt: DateTime!
  title: String!
  deletedAt: DateTime
}

input OrderCreateWithoutShopInput {
  creator: UserCreateOneInput!
  endedAt: DateTime!
  title: String!
  items: OrderItemCreateManyWithoutOrderInput
  deletedAt: DateTime
}

type OrderEdge {
  node: Order!
  cursor: String!
}

type OrderItem {
  id: ID!
  order: Order!
  user: User!
  name: String!
  price: Int!
  variety: String
}

type OrderItemConnection {
  pageInfo: PageInfo!
  edges: [OrderItemEdge]!
  aggregate: AggregateOrderItem!
}

input OrderItemCreateInput {
  order: OrderCreateOneWithoutItemsInput!
  user: UserCreateOneInput!
  name: String!
  price: Int!
  variety: String
}

input OrderItemCreateManyWithoutOrderInput {
  create: [OrderItemCreateWithoutOrderInput!]
  connect: [OrderItemWhereUniqueInput!]
}

input OrderItemCreateWithoutOrderInput {
  user: UserCreateOneInput!
  name: String!
  price: Int!
  variety: String
}

type OrderItemEdge {
  node: OrderItem!
  cursor: String!
}

enum OrderItemOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  price_ASC
  price_DESC
  variety_ASC
  variety_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OrderItemPreviousValues {
  id: ID!
  name: String!
  price: Int!
  variety: String
}

input OrderItemScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  variety: String
  variety_not: String
  variety_in: [String!]
  variety_not_in: [String!]
  variety_lt: String
  variety_lte: String
  variety_gt: String
  variety_gte: String
  variety_contains: String
  variety_not_contains: String
  variety_starts_with: String
  variety_not_starts_with: String
  variety_ends_with: String
  variety_not_ends_with: String
  AND: [OrderItemScalarWhereInput!]
  OR: [OrderItemScalarWhereInput!]
  NOT: [OrderItemScalarWhereInput!]
}

type OrderItemSubscriptionPayload {
  mutation: MutationType!
  node: OrderItem
  updatedFields: [String!]
  previousValues: OrderItemPreviousValues
}

input OrderItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderItemWhereInput
  AND: [OrderItemSubscriptionWhereInput!]
  OR: [OrderItemSubscriptionWhereInput!]
  NOT: [OrderItemSubscriptionWhereInput!]
}

input OrderItemUpdateInput {
  order: OrderUpdateOneRequiredWithoutItemsInput
  user: UserUpdateOneRequiredInput
  name: String
  price: Int
  variety: String
}

input OrderItemUpdateManyDataInput {
  name: String
  price: Int
  variety: String
}

input OrderItemUpdateManyMutationInput {
  name: String
  price: Int
  variety: String
}

input OrderItemUpdateManyWithoutOrderInput {
  create: [OrderItemCreateWithoutOrderInput!]
  delete: [OrderItemWhereUniqueInput!]
  connect: [OrderItemWhereUniqueInput!]
  disconnect: [OrderItemWhereUniqueInput!]
  update: [OrderItemUpdateWithWhereUniqueWithoutOrderInput!]
  upsert: [OrderItemUpsertWithWhereUniqueWithoutOrderInput!]
  deleteMany: [OrderItemScalarWhereInput!]
  updateMany: [OrderItemUpdateManyWithWhereNestedInput!]
}

input OrderItemUpdateManyWithWhereNestedInput {
  where: OrderItemScalarWhereInput!
  data: OrderItemUpdateManyDataInput!
}

input OrderItemUpdateWithoutOrderDataInput {
  user: UserUpdateOneRequiredInput
  name: String
  price: Int
  variety: String
}

input OrderItemUpdateWithWhereUniqueWithoutOrderInput {
  where: OrderItemWhereUniqueInput!
  data: OrderItemUpdateWithoutOrderDataInput!
}

input OrderItemUpsertWithWhereUniqueWithoutOrderInput {
  where: OrderItemWhereUniqueInput!
  update: OrderItemUpdateWithoutOrderDataInput!
  create: OrderItemCreateWithoutOrderInput!
}

input OrderItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  order: OrderWhereInput
  user: UserWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  variety: String
  variety_not: String
  variety_in: [String!]
  variety_not_in: [String!]
  variety_lt: String
  variety_lte: String
  variety_gt: String
  variety_gte: String
  variety_contains: String
  variety_not_contains: String
  variety_starts_with: String
  variety_not_starts_with: String
  variety_ends_with: String
  variety_not_ends_with: String
  AND: [OrderItemWhereInput!]
  OR: [OrderItemWhereInput!]
  NOT: [OrderItemWhereInput!]
}

input OrderItemWhereUniqueInput {
  id: ID
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  endedAt_ASC
  endedAt_DESC
  title_ASC
  title_DESC
  deletedAt_ASC
  deletedAt_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OrderPreviousValues {
  id: ID!
  endedAt: DateTime!
  title: String!
  deletedAt: DateTime
}

input OrderScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  endedAt: DateTime
  endedAt_not: DateTime
  endedAt_in: [DateTime!]
  endedAt_not_in: [DateTime!]
  endedAt_lt: DateTime
  endedAt_lte: DateTime
  endedAt_gt: DateTime
  endedAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: [DateTime!]
  deletedAt_not_in: [DateTime!]
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  AND: [OrderScalarWhereInput!]
  OR: [OrderScalarWhereInput!]
  NOT: [OrderScalarWhereInput!]
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
  AND: [OrderSubscriptionWhereInput!]
  OR: [OrderSubscriptionWhereInput!]
  NOT: [OrderSubscriptionWhereInput!]
}

input OrderUpdateInput {
  shop: ShopUpdateOneWithoutOrdersInput
  creator: UserUpdateOneRequiredInput
  endedAt: DateTime
  title: String
  items: OrderItemUpdateManyWithoutOrderInput
  deletedAt: DateTime
}

input OrderUpdateManyDataInput {
  endedAt: DateTime
  title: String
  deletedAt: DateTime
}

input OrderUpdateManyMutationInput {
  endedAt: DateTime
  title: String
  deletedAt: DateTime
}

input OrderUpdateManyWithoutShopInput {
  create: [OrderCreateWithoutShopInput!]
  delete: [OrderWhereUniqueInput!]
  connect: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutShopInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutShopInput!]
  deleteMany: [OrderScalarWhereInput!]
  updateMany: [OrderUpdateManyWithWhereNestedInput!]
}

input OrderUpdateManyWithWhereNestedInput {
  where: OrderScalarWhereInput!
  data: OrderUpdateManyDataInput!
}

input OrderUpdateOneRequiredWithoutItemsInput {
  create: OrderCreateWithoutItemsInput
  update: OrderUpdateWithoutItemsDataInput
  upsert: OrderUpsertWithoutItemsInput
  connect: OrderWhereUniqueInput
}

input OrderUpdateWithoutItemsDataInput {
  shop: ShopUpdateOneWithoutOrdersInput
  creator: UserUpdateOneRequiredInput
  endedAt: DateTime
  title: String
  deletedAt: DateTime
}

input OrderUpdateWithoutShopDataInput {
  creator: UserUpdateOneRequiredInput
  endedAt: DateTime
  title: String
  items: OrderItemUpdateManyWithoutOrderInput
  deletedAt: DateTime
}

input OrderUpdateWithWhereUniqueWithoutShopInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutShopDataInput!
}

input OrderUpsertWithoutItemsInput {
  update: OrderUpdateWithoutItemsDataInput!
  create: OrderCreateWithoutItemsInput!
}

input OrderUpsertWithWhereUniqueWithoutShopInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutShopDataInput!
  create: OrderCreateWithoutShopInput!
}

input OrderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  shop: ShopWhereInput
  creator: UserWhereInput
  endedAt: DateTime
  endedAt_not: DateTime
  endedAt_in: [DateTime!]
  endedAt_not_in: [DateTime!]
  endedAt_lt: DateTime
  endedAt_lte: DateTime
  endedAt_gt: DateTime
  endedAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  items_every: OrderItemWhereInput
  items_some: OrderItemWhereInput
  items_none: OrderItemWhereInput
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: [DateTime!]
  deletedAt_not_in: [DateTime!]
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  AND: [OrderWhereInput!]
  OR: [OrderWhereInput!]
  NOT: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  menu(where: MenuWhereUniqueInput!): Menu
  menus(where: MenuWhereInput, orderBy: MenuOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Menu]!
  menusConnection(where: MenuWhereInput, orderBy: MenuOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MenuConnection!
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  orderItem(where: OrderItemWhereUniqueInput!): OrderItem
  orderItems(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderItem]!
  orderItemsConnection(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderItemConnection!
  shop(where: ShopWhereUniqueInput!): Shop
  shops(where: ShopWhereInput, orderBy: ShopOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Shop]!
  shopsConnection(where: ShopWhereInput, orderBy: ShopOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ShopConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Shop {
  id: ID!
  name: String!
  address: String
  phone: String
  menu: Menu
  creator: User!
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
}

type ShopConnection {
  pageInfo: PageInfo!
  edges: [ShopEdge]!
  aggregate: AggregateShop!
}

input ShopCreateInput {
  name: String!
  address: String
  phone: String
  menu: MenuCreateOneInput
  creator: UserCreateOneInput!
  orders: OrderCreateManyWithoutShopInput
}

input ShopCreateOneWithoutOrdersInput {
  create: ShopCreateWithoutOrdersInput
  connect: ShopWhereUniqueInput
}

input ShopCreateWithoutOrdersInput {
  name: String!
  address: String
  phone: String
  menu: MenuCreateOneInput
  creator: UserCreateOneInput!
}

type ShopEdge {
  node: Shop!
  cursor: String!
}

enum ShopOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  address_ASC
  address_DESC
  phone_ASC
  phone_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ShopPreviousValues {
  id: ID!
  name: String!
  address: String
  phone: String
}

type ShopSubscriptionPayload {
  mutation: MutationType!
  node: Shop
  updatedFields: [String!]
  previousValues: ShopPreviousValues
}

input ShopSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ShopWhereInput
  AND: [ShopSubscriptionWhereInput!]
  OR: [ShopSubscriptionWhereInput!]
  NOT: [ShopSubscriptionWhereInput!]
}

input ShopUpdateInput {
  name: String
  address: String
  phone: String
  menu: MenuUpdateOneInput
  creator: UserUpdateOneRequiredInput
  orders: OrderUpdateManyWithoutShopInput
}

input ShopUpdateManyMutationInput {
  name: String
  address: String
  phone: String
}

input ShopUpdateOneWithoutOrdersInput {
  create: ShopCreateWithoutOrdersInput
  update: ShopUpdateWithoutOrdersDataInput
  upsert: ShopUpsertWithoutOrdersInput
  delete: Boolean
  disconnect: Boolean
  connect: ShopWhereUniqueInput
}

input ShopUpdateWithoutOrdersDataInput {
  name: String
  address: String
  phone: String
  menu: MenuUpdateOneInput
  creator: UserUpdateOneRequiredInput
}

input ShopUpsertWithoutOrdersInput {
  update: ShopUpdateWithoutOrdersDataInput!
  create: ShopCreateWithoutOrdersInput!
}

input ShopWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  menu: MenuWhereInput
  creator: UserWhereInput
  orders_every: OrderWhereInput
  orders_some: OrderWhereInput
  orders_none: OrderWhereInput
  AND: [ShopWhereInput!]
  OR: [ShopWhereInput!]
  NOT: [ShopWhereInput!]
}

input ShopWhereUniqueInput {
  id: ID
  name: String
}

type Subscription {
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  menu(where: MenuSubscriptionWhereInput): MenuSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  orderItem(where: OrderItemSubscriptionWhereInput): OrderItemSubscriptionPayload
  shop(where: ShopSubscriptionWhereInput): ShopSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  isAdmin: Boolean!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  isAdmin: Boolean
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  isAdmin_ASC
  isAdmin_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  isAdmin: Boolean!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  isAdmin: Boolean
}

input UserUpdateInput {
  email: String
  isAdmin: Boolean
}

input UserUpdateManyMutationInput {
  email: String
  isAdmin: Boolean
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  isAdmin: Boolean
  isAdmin_not: Boolean
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    