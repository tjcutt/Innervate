exports.seed = function(knex) {
    return knex('referrals').del()
        .then(() => {
            return knex('referrals').insert([{
                id: 1,
                name: 'Baylor University'
            }, {
                id: 2,
                name: 'University of Colorado School of Medicine'
            }, {
                id: 3,
                name: `Children's Hospital Colorado`
            }, {
                id: 4,
                name: 'Amen Clinics'
            }]);
        });
};
