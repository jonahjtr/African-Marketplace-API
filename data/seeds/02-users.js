const bcrypt = require("bcryptjs");

exports.seed = function (knex, Promise) {
  return knex("users")
    .del()
    .then(function () {
      const testPassword1 = bcrypt.hashSync("test", 8);
      const testPassword2 = bcrypt.hashSync("bob", 8);
      const testPassword3 = bcrypt.hashSync("owner", 8);

      return knex("users").insert([
        { username: "test", password: testPassword1, role: "user" },
        { username: "billy", password: testPassword2, role: "user" },
        { username: "owner", password: testPassword3, role: "owner" },
      ]);
    });
};
