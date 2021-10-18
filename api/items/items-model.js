const db = require("../../data/db-config");

function find() {
  return db("items");
}

module.exports = {
  find,
};
