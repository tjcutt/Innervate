exports.seed = function(knex) {
    return knex('proposal_disorder').del()
        .then(() => {
            return knex('proposal_disorder').insert([{
                id: 1,
                proposal_id: 1,
                disorder_id:6
            }, {
                id: 2,
                proposal_id: 2,
                disorder_id: 4
            }, {
                id: 3,
                proposal_id: 3,
                disorder_id: 3
            },{
                id: 4,
                proposal_id: 4,
                disorder_id: 10
            }, {
                id: 5,
                proposal_id: 5,
                disorder_id: 6
            }, {
                id: 6,
                proposal_id: 6 ,
                disorder_id: 3
            }]);
        });
};
