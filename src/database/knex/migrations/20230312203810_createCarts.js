exports.up = knex => knex.schema.createTable('carts', table => {
  table.increments('id')
  table.integer('user_id').references('id').inTable('users')

  table.text('status')
  table.text('paymentMethods')

  table.timestamp("created_at").default(knex.fn.now());
})

exports.down = knex => knex.schema.dropTable("carts")