
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('referrals', table => {
      table.increments();
      table.string('name')
       .notNullable()
      table.boolean('active')
       .notNullable()
       .defaultTo(true)
      table.timestamps(true, true)
      })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('referrals')
  ])
};
