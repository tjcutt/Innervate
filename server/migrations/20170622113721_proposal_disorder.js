exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('proposal_disorder', table => {
      table.increments();
      table.integer('proposal_id')
        .references('proposals.id')
        .notNullable();
      table.integer('disorder_id')
        .references('disorders.id')
        .notNullable();
    })
  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('proposal_disorder')
  ])
};
