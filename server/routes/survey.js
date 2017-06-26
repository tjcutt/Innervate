var express = require('express');
var router = express.Router();
const knex = require('../knex');

router.get('/', function(req, res, next) {
  res.send('i connect');
});

router.post('/', function(req, res, next){
  knex('referrals')
    .where('name', req.body.referral)
    .then((referral) => {
      knex('users')
        .returning('*')
        .insert({
          'first_name':"Megan",
          'last_name':"Gross",
          'email':"144@gmail.com",
          'referral_id': referral[0].id
        }).then((user) => {
          knex('disorders')
            .whereIn('name', req.body.values)
            .then((disorders) => {
              for(var i = 0; i < disorders.length; i++){
                knex('user_disorder')
                  .returning('*')
                  .insert({
                    disorder_id:disorders[i].id,
                    user_id:user[0].id
                  }).then((user_disorder)=>{
                      knex('roles')
                        .where('name', req.body.role)
                        .then((role) => {
                          knex('user_role')
                            .insert({
                              user_id:user[0].id,
                              role_id:role[0].id
                            }).then((done) => {
                            })
                        })
                  })
              }
            })
        })
    })
    res.send('no');
})

module.exports = router;
