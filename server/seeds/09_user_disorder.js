exports.seed = function(knex) {
    return knex('user_disorder').del()
        .then(() => {
            return knex('user_disorder').insert([{
                id: 1,
                user_id: 1,
                disorder_id:6
            }, {
                id: 2,
                user_id: 2 ,
                disorder_id: 1
            }, {
                id: 3,
                user_id: 2 ,
                disorder_id: 9
            },{
                id: 4,
                user_id: 3 ,
                disorder_id: 4
            }, {
                id: 5,
                user_id: 5,
                disorder_id: 3
            }, {
                id: 6,
                user_id: 5 ,
                disorder_id: 5
            }, {
                id: 7,
                user_id: 6,
                disorder_id: 10
            }, {
                id: 8,
                user_id: 6,
                disorder_id: 11
            }, {
                id: 9,
                user_id: 7,
                disorder_id: 6
            }, {
                id: 10,
                user_id: 8,
                disorder_id: 3
            }]);
        });
};
