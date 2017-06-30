var express = require('express');
var router = express.Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');
var colors = require('colors');

router.get('/', function(req, res, next) {
  res.send('i connect');
});

router.post('/', function(req, res, next){
  let userInfo = jwt.verify(req.cookies.user, process.env.JWT_SECRET).user
  console.log('this is not my beautiful wife'.america);
  console.log('this is your user info'.rainbow, userInfo);
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
          console.log('what is this user info'.bgRed, user);
          knex('disorders')
            // .then(data=> {
            //   console.log('disorders'.rainbow, data, 'values'.rainbow, req.body.disorders[0]);
            // })
            .where('name', req.body.disorders[0])
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
                            }).then((data) => {
                              console.log('what data do i have', data);
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
