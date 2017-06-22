exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('proposal_solution', table => {
      table.increments();
      table.integer('proposal_id')
        .references('proposals.id')
        .notNullable();
      table.integer('solution_id')
        .references('solutions.id')
        .notNullable();
    })
  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('proposal_solution')
  ])
};
