exports.seed = function(knex) {
    return knex('proposal_solution').del()
        .then(() => {
            return knex('proposal_solution').insert([{
                proposal_id: 1,
                solution_id: 4
            },{
                proposal_id: 2,
                solution_id: 3
            },{
                proposal_id: 2,
                solution_id: 6
            },{
                proposal_id: 3,
                solution_id: 6
            },{
                proposal_id: 3,
                solution_id: 1
            },{
                proposal_id: 3,
                solution_id: 4
            }, {
                proposal_id: 4,
                solution_id: 5
            }, {
                proposal_id: 5,
                solution_id: 1
            }, {
                proposal_id: 6,
                solution_id: 6
            }]);
        });
};
