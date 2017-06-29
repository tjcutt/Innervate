exports.seed = function(knex) {
    return knex('votes').del()
        .then(() => {
            return knex('votes').insert([{
                user_id: 1,
                proposal_id: 1,
                active: false
            }, {
                user_id: 2,
                proposal_id: 4,
                active: false
            }, {
                user_id: 3,
                proposal_id: 2,
                active: false
            },{
                user_id: 4,
                proposal_id: 6,
                active: false
            }, {
                user_id: 5,
                proposal_id: 3,
                active: false
            }, {
                user_id: 6 ,
                proposal_id: 1,
                active: false
            }, {
                user_id: 7,
                proposal_id: 2,
                active: false
            }, {
                user_id: 8,
                proposal_id: 3,
                active: false
            }]);
        });
};
