const express = require('express');
const router = express.Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');

router.get('/', function(req, res, next) {
  res.send('i connect');
});

router.post('/', function(req, res, next){
  console.log('this is the userinfo', user);
  console.log('this is the req.body', req.body.userCookie);
  let userInfo = jwt.verify(req.body.userCookie, process.env.JWT_SECRET)
  let user = userInfo
  console.log('this is your user info', userInfo);
  knex('referrals')
    .where('name', req.body.referral)
    .then((referral) => {
      knex('users')
        .returning('*')
        .insert({
          'first_name': user.first_name,
          'last_name': user.last_name,
          'email':user.email,
          'referral_id': referral[0].id
        })
        .then((user) => {
           console.log('user from survey', user);
          knex('disorders')
            .select('*')
            .where('name', req.body.disorders[0])
            .then((disorders) => {
              console.log('yay disorders', disorders);
              for(var i = 0; i < disorders.length; i++){
                knex('user_disorder')
                  .returning('*')
                  .insert({
                    disorder_id:disorders[i].id,
                    user_id:user[0].id
                  })
                  .then((user_disorder)=>{
                     console.log('user disorder', user_disorder);
                      knex('roles')
                        .where('name', req.body.role)
                        .then((role) => {
                           console.log('role', role);
                          knex('user_role')
                            .returning('*')
                            .insert({
                              user_id:user[0].id,
                              role_id:role[0].id
                            })
                            .then((data) => {
                              let roleData = data[0].role_id
                              let role = jwt.sign({
                                  role: roleData
                              }, process.env.JWT_SECRET)
                              console.log('STRING', role);

                              res.send({role:role});
                            })
                        })
                  })
                }
            })
        })
    })
})

module.exports = router;
