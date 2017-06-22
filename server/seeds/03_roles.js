exports.seed = function(knex) {
    return knex('roles').del()
        .then(() => {
            return knex('roles').insert([{
                id: 1,
                name: 'Patient'
            }, {
                id: 2,
                name: 'Caregiver'
            }, {
                id: 3,
                name: 'Family'
            }, {
                id: 4,
                name: 'Medical Professional'
            }, {
                id: 5,
                name: 'Reviewer'
            }, {
                id: 6,
                name: 'Admin'
            }]);
        });
};
