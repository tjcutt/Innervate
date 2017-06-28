exports.up = function(knex, Promise) {
  return Promise.all([
   knex.schema.createTable('users', table => {
     table.increments();
     table.string('first_name').notNullable().defaultTo('')
     table.string('last_name').notNullable().defaultTo('')
     table.string('email').notNullable().defaultTo('')
     table.string('hashed_pass').notNullable().defaultTo('$2a$10$e5ExVedLT/j4F6pRtT90Wel2JqdSgGl8fhJwYGeDL6QZS1j/Y.2Na')
     table.boolean('active')
      .notNullable()
      .defaultTo(true)
      table.integer('referral_id')
        .references('referrals.id')
     table.timestamps(true, true)
     })
 ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
};
