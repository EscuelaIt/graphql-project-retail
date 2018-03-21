
exports.up = function(knex, Promise) {
  Promise.all([
    knex.schema.createTable('cart', (table) => {
      table.increments('id').primary().unsigned()
      table.integer('client_id').unsigned()
      table.foreign('client_id').references('client.id')
    })
  ])
};

exports.down = function(knex, Promise) {
  Promise.all([
    knex.schema.dropTable('cart')
  ])
};
