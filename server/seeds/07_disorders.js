exports.seed = function(knex) {
    return knex('disorders').del()
        .then(() => {
            return knex('disorders').insert([{
                id: 1,
                name: 'Stroke'
            }, {
                id: 2,
                name: 'Brain Injury'
            }, {
              id: 3,
              name: `Alzheimer's Disease and Other Dementias`
            },{
              id:4,
              name:'Epilepsy'
            } ,{
              id: 5,
              name: `Parkinson's Disease`
            }, {
              id: 6,
              name: 'Autism Spectrum Disorders and Other Neurodevelopmental Disorders'
            }, {
              id: 7,
              name: 'Multiple Sclerosis'
            }, {
              id: 8,
              name: 'ALS and Other Neurodegenerative Disorders'
            }, {
              id: 9,
              name: 'Spinal Cord Injury'
            }, {
              id: 10,
              name: 'Migraine'
            }, {
              id: 11,
              name: 'Other'
            }]);
        });
};
