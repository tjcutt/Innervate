const express = require('express');
const router = express.Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');
const colors = require('colors');

router.get('/', function(req, res, next) {
  res.send('i connect');
});

router.post('/', function(req, res, next){
  let userInfo = jwt.verify(req.body.userCookie.tokens, process.env.JWT_SECRET)
  let user = userInfo.user
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
                                // console.log('gots my role'.cyan, role);
                                // return role
                              res.send(role);
                            })
                        })
                  })
              }
            })
        })
    })
})

module.exports = router;
