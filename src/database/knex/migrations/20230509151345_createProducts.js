exports.up = knex => knex.schema.createTable("products", table => {
  table.increments("id").primary();
  table.string("name").notNullable();
  table.string("category").notNullable();
  table.decimal("price", 8, 2).notNullable();
})

exports.down = function(knex) {
  return knex.schema.dropTable("products");
};