exports.seed = function(knex) {
    return knex('user_role').del()
        .then(() => {
            return knex('user_role').insert([{
                user_id: 1,
                role_id: 1
            }, {
                user_id: 2,
                role_id: 4
            }, {
                user_id: 3,
                role_id: 2
            },{
                user_id: 4,
                role_id: 6
            }, {
                user_id: 5,
                role_id: 3
            }, {
                user_id: 6 ,
                role_id: 1
            }, {
                user_id: 7,
                role_id: 2
            }, {
                user_id: 8,
                role_id: 3
            }]);
        });
};
