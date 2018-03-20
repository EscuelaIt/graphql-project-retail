
exports.up = function(knex, Promise) {
  Promise.all([
    knex.schema.createTable('product', (table) => {
      table.increments('id').primary().unsigned()
      table.string('name')
      table.integer('cant')
      table.string('text')
    })
  ])
};

exports.down = function(knex, Promise) {
  Promise.all([
    knex.schema.dropTable('product')
  ])
};
