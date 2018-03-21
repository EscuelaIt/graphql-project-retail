
exports.up = function(knex, Promise) {
  Promise.all([
    knex.schema.createTable('cart_product', (table) => {
      table.increments('id').primary().unsigned()
      table.integer('cart_id').unsigned()
      table.foreign('cart_id').references('cart.id')
      table.integer('product_id').unsigned()
      table.foreign('product_id').references('product.id')
    })
  ])
};

exports.down = function(knex, Promise) {
  Promise.all([
    knex.schema.dropTable('cart_product')
  ])
};
