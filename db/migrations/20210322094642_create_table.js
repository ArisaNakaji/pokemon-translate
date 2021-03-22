
exports.up = function (knex) {
  return knex.schema.createTable('pokemon', function (table) {
    table.increments('pokemon_id').primary();
    table.string('english_name').notNullable();
    table.string('japanese_name').notNullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('pokemon');
};
