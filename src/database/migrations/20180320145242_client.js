
exports.up = function(knex, Promise) {
  Promise.all([
    knex.schema.createTable('client', (table) => {
      table.increments('id').primary().unsigned()
      table.string('name')
      table.integer('age')
    })
  ])
};

exports.down = function(knex, Promise) {
  Promise.all([
    knex.schema.dropTable('client')
  ])
};
