const express = require('express');
const router = express.Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');

router.get('/', function(req, res, next) {
 res.send('i connect');
});

router.post('/', function(req, res, next) {
 let userInfo = jwt.verify(req.body.userCookie, process.env.JWT_SECRET)
 let userCookie = userInfo.user
 if (req.body.referral == 'otherRef') {
  req.body.referral = 'Other'
 }
 knex('referrals')
  .where('name', req.body.referral)
  .then((referral) => {
   knex('users')
    .where('id', userCookie.id)
    .returning('*')
    .update({
     'referral_id': referral[0].id
    })
    .then((user) => {
      return insertDisorders(req.body.disorders, userCookie.id)
    })
    .then((thing) => {
      return insertUserRole(req.body.role, userCookie.id)
    })
    .then((roleInsert) => {
      let roleData = roleInsert.role_id
      let role = jwt.sign({
       role: roleData
      }, process.env.JWT_SECRET)
      res.send({
       role: role
      });
    })
  })
})

function insertUserRole(reqRole, userID){
  return knex('roles')
    .where('name', reqRole)
    .then(role => {
      return knex('user_role')
        .returning('*')
        .insert({
          user_id:userID,
          role_id:role[0].id
        })
        .then((data) => {
          return data[0];
        })
    })
}

function insertDisorders(disorders, userID) {
 return knex('disorders')
  .whereIn('name', disorders)
  .then((disorders) => {
   return Promise.all(
    disorders.map(function(disorder) {
     return knex('user_disorder')
      .returning('*')
      .insert({
       disorder_id: disorder.id,
       user_id: userID
      })
    })
   )
  })
}
module.exports = router;
