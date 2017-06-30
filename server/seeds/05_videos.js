exports.seed = function(knex) {
    return knex('articles').del()
        .then(() => {
            return knex('articles').insert([{
                url: 'https://www.youtube.com/watch?v=AQqSW6khkwo',
                proposal_id:2
            }, {
                url: 'https://www.youtube.com/watch?v=OAvkr1z8ah4&list=PLk2tWNpMtIN236y6ekduAPrhMTNLIFdtm',
                proposal_id: 1
            }]);
        });
};
