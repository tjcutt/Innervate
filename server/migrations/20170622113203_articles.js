exports.up = function(knex, Promise) {
  return Promise.all([
   knex.schema.createTable('articles', table => {
     table.increments();
     table.string('url')
      .notNullable()
     table.boolean('active')
      .notNullable()
      .defaultTo(true)
      table.integer('proposal_id')
        .references('proposals.id')
        .notNullable()
     table.timestamps(true, true)
     })
 ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('articles')
  ])
};
