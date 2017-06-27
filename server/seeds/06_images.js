exports.seed = function(knex) {
    return knex('images').del()
        .then(() => {
            return knex('images').insert([{
                id: 1,
                url: 'http://www.alexandrahuntblog.com/wp-content/uploads/2014/07/2014-PERSONAL-JULY-9241-copy.jpg',
                proposal_id:2
            }, {
                id: 2,
                url: 'http://www.opensourceimaging.org/wp-content/uploads/Open-Source-Imaging-OpenBCI-EEG-software.jpg',
                proposal_id: 1
            }]);
        });
};
