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
      console.log(referral[0].id);
      knex('users')
        .returning('*')
        .insert({
          'first_name':"Megan",
          'last_name':"Gross",
          'email':"144@gmail.com",
          'referral_id': referral[0].id
        }).then((user) => {
          console.log(user);
        })
    })
  res.send('yah');
})

module.exports = router;
