exports.up = function(knex) {
  return knex.schema.createTable("category", table => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.integer("category_id").unsigned().notNullable().references("id").inTable("categories");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("category");
};