exports.seed = function(knex) {
    return knex('referrals').del()
        .then(() => {
            return knex('referrals').insert([{
                name: 'Baylor University'
            }, {
                name: 'University of Colorado School of Medicine'
            }, {
                name: `Children's Hospital Colorado`
            },{
              name:'Other'
            }]);
        });
};
