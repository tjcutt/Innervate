exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('user_role', table => {
      table.increments();
      table.integer('user_id')
        .references('users.id')
        .notNullable();
      table.integer('role_id')
        .references('roles.id')
        .notNullable();
    })
  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user_role')
  ])
};
