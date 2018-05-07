
exports.up = function(knex, Promise) {
  Promise.all([
    knex.schema.createTable('task', (table) => {
      table.increments('id').primary().unsigned()
      table.string('text')
      table.boolean('completed')
    })
  ])
};

exports.down = function(knex, Promise) {
  Promise.all([
    knex.schema.dropTable('task')
  ])
};
