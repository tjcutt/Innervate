
exports.up = function(knex, Promise) {
  return Promise.all([
   knex.schema.createTable('proposals', table => {
     table.increments();
     table.string('title').notNullable().defaultTo('')
     table.string('summary').notNullable().defaultTo('')
     table.string('story').notNullable().defaultTo('')
     table.string('info').notNullable().defaultTo('')
     table.boolean('active')
      .notNullable()
      .defaultTo(true)
      table.integer('user_id')
        .references('users.id')
        .notNullable()
     table.timestamps(true, true)
     })
 ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('proposals')
  ])
};
