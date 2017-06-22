exports.seed = function(knex) {
    return knex('afflictions').del()
        .then(() => {
            return knex('afflictions').insert([{
                id: 1,
                name: 'Motor Skills'
            }, {
                id: 2,
                name: 'Sensory Deficits'
            }, {
              id: 3,
              name: `Language/Speech Barriers`
            }, {
              id: 4,
              name: 'Safety Issues'
            }, {
              id: 5,
              name: 'Medication Adherence'
            }, {
              id: 6,
              name: 'Sleep Disturbance'
            }, {
              id: 7,
              name: 'Working'
            }, {
              id: 8,
              name: 'Transportation'
            }]);
        });
};
