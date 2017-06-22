exports.seed = function(knex) {
    return knex('proposal_solution').del()
        .then(() => {
            return knex('proposal_solution').insert([{
                id: 1,
                proposal_id: 1,
                solution_id: 4
            },{
                id: 2,
                proposal_id: 2,
                solution_id: 3
            },{
                id: 3,
                proposal_id: 2,
                solution_id: 6
            },{
                id: 4,
                proposal_id: 3,
                solution_id: 6
            },{
                id: 5,
                proposal_id: 3,
                solution_id: 1
            },{
                id: 6,
                proposal_id: 3,
                solution_id: 4
            }, {
                id: 7,
                proposal_id: 4,
                solution_id: 5
            }, {
                id: 8,
                proposal_id: 5,
                solution_id: 1
            }, {
                id: 9,
                proposal_id: 6,
                solution_id: 6
            }]);
        });
};
