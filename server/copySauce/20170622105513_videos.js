exports.up = function(knex, Promise) {
  return Promise.all([
   knex.schema.createTable('videos', table => {
     table.increments();
     table.string('url')
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
    knex.schema.dropTable('videos')
  ])
};
