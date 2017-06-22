exports.seed = function(knex) {
    return knex('proposal_affliction').del()
        .then(() => {
            return knex('proposal_affliction').insert([{
                id: 1,
                proposal_id: 1,
                affliction_id: 6
            },{
                id: 2,
                proposal_id: 2,
                affliction_id: 6
            },{
                id: 3,
                proposal_id: 2,
                affliction_id: 4
            },{
                id: 4,
                proposal_id: 3,
                affliction_id: 5
            },{
                id: 5,
                proposal_id: 4,
                affliction_id: 7
            },{
                id: 6,
                proposal_id: 5,
                affliction_id: 7
            }]);
        });
};
