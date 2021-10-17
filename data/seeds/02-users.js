exports.seed = function (knex, Promise) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        { username: "test", password: "test", role: "user" },
        { username: "billy", password: "bob", role: "user" },
        { username: "owner", password: "owner", role: "owner" },
      ]);
    });
};
