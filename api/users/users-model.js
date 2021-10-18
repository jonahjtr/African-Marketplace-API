const db = require("../../data/db-config");

function findBy(filter) {
  return db("users").select("username", "user_id", "password").where(filter);
}

function findById(user_id) {
  return db("users").where("user_id", user_id).first();
}

async function add(user) {
  const [newUser] = await db("users").insert(user, [
    "username",
    "password",
    "role",
  ]);
  return newUser;
}

module.exports = {
  findBy,
  findById,
  add,
};
