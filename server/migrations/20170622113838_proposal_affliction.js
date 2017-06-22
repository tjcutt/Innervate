exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('proposal_affliction', table => {
      table.increments();
      table.integer('proposal_id')
        .references('proposals.id')
        .notNullable();
      table.integer('affliction_id')
        .references('afflictions.id')
        .notNullable();
    })
  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('proposal_affliction')
  ])
};
