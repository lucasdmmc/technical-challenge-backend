exports.up = function(knex) {
  return knex.schema.createTable("product", table => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("category").notNullable();
    table.decimal("price", 8, 2).notNullable();
    table.integer("product_id").unsigned().notNullable().references("id").inTable("products");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("product");
};