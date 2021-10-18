const db = require("../../data/db-config");
function find() {
  return db("items as i")
    .join("users as u", "i.user_id", "u.user_id")
    .select(
      "i.item_id",
      "i.name",
      "i.category",
      "i.description",
      "i.price",
      "u.user_id",
      "u.username",
      "u.role"
    );
}
function findBy(filter) {
  return db("items as i")
    .join("users as u", "i.user_id", "u.user_id")
    .select(
      "i.item_id",
      "i.name",
      "i.category",
      "i.description",
      "i.price",
      "u.user_id",
      "u.username",
      "u.role"
    )
    .where(filter);
}
function findById(id) {
  return db("items as i")
    .join("users as u", "i.user_id", "u.user_id")
    .select(
      "i.item_id",
      "i.name",
      "i.category",
      "i.description",
      "i.price",
      "u.user_id",
      "u.username",
      "u.role"
    )
    .where("item_id", id);
}

async function add(item) {
  const [newItem] = await db("items").insert(item, [
    "item_id",
    "name",
    "category",
    "description",
    "price",
  ]);
  return newItem;
}

function updateItem(id, changes) {
  return db("items")
    .where("item_id", id)
    .update(changes, [
      "item_id",
      "name",
      "category",
      "description",
      "user_id",
      "price",
    ]);
}
async function deleteItem(id) {
  console.log("deleted function");
  const deletedItems = await findById(id);
  await db("items").where("item_id", id).del();
  return deletedItems;
}

module.exports = {
  add,
  find,
  findBy,
  findById,
  updateItem,
  deleteItem,
};
