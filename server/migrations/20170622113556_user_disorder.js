exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('user_disorder', table => {
      table.increments();
      table.integer('user_id')
        .references('users.id')
        .notNullable();
      table.integer('disorder_id')
        .references('disorders.id')
        .notNullable();
    })
  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user_disorder')
  ])
};
