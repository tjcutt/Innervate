const express = require('express');
const router = express.Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');

router.get('/', function(req, res, next) {
  res.send('i connect');
});

router.post('/', function(req, res, next){
  // console.log(req.body);
  let userInfo = jwt.verify(req.body.userCookie, process.env.JWT_SECRET)
  let user = userInfo.user
  if(req.body.referral == 'otherRef'){
    req.body.referral = 'Other'
  }
  console.log(req.body);
  knex('referrals')
    .where('name', req.body.referral)
    .then((referral) => {
      console.log(referral);
      knex('users')
        .where('id', user.id)
        .returning('*')
        .update({
          'referral_id': referral[0].id
        })
        .then((user) => {
          knex('disorders')
            .select('*')
            .where('name', req.body.disorders[0])
            .then((disorders) => {
              for(var i = 0; i < disorders.length; i++){
                knex('user_disorder')
                  .returning('*')
                  .insert({
                    disorder_id:disorders[i].id,
                    user_id:user[0].id
                  })
                  .then((user_disorder)=>{
                      knex('roles')
                        .where('name', req.body.role)
                        .then((role) => {
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
