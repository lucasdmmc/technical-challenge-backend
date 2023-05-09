exports.up = knex => knex.schema.createTable("categories/:id", table => {
  table.text("name");
  table.integer("categories_id").references("id").inTable("categories");
})

exports.down = knex => knex.schema.createTable("categories/:id");

