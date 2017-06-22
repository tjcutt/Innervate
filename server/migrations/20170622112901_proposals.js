
exports.up = function(knex, Promise) {
  return Promise.all([
   knex.schema.createTable('proposals', table => {
     table.increments();
     table.string('title').notNullable().defaultTo('')
     table.text('summary').notNullable().defaultTo('')
     table.text('story').notNullable().defaultTo('')
     table.text('info').notNullable().defaultTo('')
     table.integer('votes').notNullable().defaultTo(0);
     table.integer('created_by_user_id')
     table.integer('edited_by_user_id')
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
