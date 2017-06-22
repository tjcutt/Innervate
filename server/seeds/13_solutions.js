exports.seed = function(knex) {
    return knex('solutions').del()
        .then(() => {
            return knex('solutions').insert([{
                id: 1,
                name: 'Assistive Devices'
            }, {
                id: 2,
                name: 'Biomarker Development'
            }, {
              id: 3,
              name: `Alert Systems`
            }, {
              id: 4,
              name: 'Integrating Existing Systems/Data Analytics'
            }, {
              id: 5,
              name: 'Services'
            }, {
              id: 6,
              name: 'Apps'
            }]);
        });
};
