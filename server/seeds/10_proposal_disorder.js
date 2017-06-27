exports.seed = function(knex) {
    return knex('proposal_disorder').del()
        .then(() => {
            return knex('proposal_disorder').insert([{
                proposal_id: 1,
                disorder_id:6
            }, {
                proposal_id: 2,
                disorder_id: 4
            }, {
                proposal_id: 3,
                disorder_id: 3
            },{
                proposal_id: 4,
                disorder_id: 10
            }, {
                proposal_id: 5,
                disorder_id: 6
            }, {
                proposal_id: 6 ,
                disorder_id: 3
            }]);
        });
};
