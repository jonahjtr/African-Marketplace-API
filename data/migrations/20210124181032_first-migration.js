exports.up = async (knex, Promise) => {
  await knex.schema
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("username", 200).notNullable();
      users.string("password", 200).notNullable();
      users.string("role").notNullable();
      users.timestamps(false, true);
    })
    .createTable("items", (items) => {
      items.increments("item_id");
      items.string("name").notNullable();
      items.string("location").notNullable();
      items.string("category").notNullable();
      items.string("description").notNullable();
      items.decimal("price").notNullable().unsigned();
      items
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT");
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("items").dropTableIfExists("users");
};
