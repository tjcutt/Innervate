exports.seed = function(knex) {
    return knex('articles').del()
        .then(() => {
            return knex('articles').insert([{
                id: 1,
                url: 'http://www.n2sleep.com/Portals/408/Skins/PB-CYU/files/ELECTRODE%20PLACEMENT%20SYSTEM%20FOR%20SLEEP.pdf',
                proposal_id:1
            }, {
                id: 2,
                url: 'http://www.sciencedirect.com/science/article/pii/S1090379898800184',
                proposal_id: 2
            }, {
                id: 3,
                url: 'http://openbci.com/',
                proposal_id:1
            }, {
                id: 4,
                url: 'http://pediatrics.aappublications.org/content/94/2/148.short',
                proposal_id:2
            }]);
        });
};
