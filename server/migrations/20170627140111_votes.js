exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('votes', table => {
      table.increments();
      table.integer('user_id')
        .references('users.id')
        .notNullable();
      table.integer('proposal_id')
        .references('proposals.id')
        .notNullable();
       table.boolean('active')
        .notNullable()
        .defaultTo(false)
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('votes')
  ])
};
