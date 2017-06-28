const express = require('express')
const router = express.Router()
const knex = require('../knex')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv')

router.post('/', function(req, res, next) {
  // console.log('auth', req.body)
  knex('users')
    .join('user_role', 'user_role.user_id', 'users.id')
    .join('roles', 'user_role.role_id', 'roles.id')
    .where('email', req.body.email)
    .select('*')
    .then((data) => {
      console.log(data[0].hashed_pass);
      console.log(req.body.hashed_pass);
      if (bcrypt.compareSync(data[0].hashed_pass, req.body.hashed_pass)) {
        console.log('It works!!!');
      }
      else {console.log('what are you doing?!!')}
       let tokens = setTokens(data[0])
      res.send(tokens);
    })
    // .then(res => res.json({tokens}))
    .catch((error) => {
      next(error)
    })
})

function setTokens(user) {
  let token = jwt.sign({user:user}, process.env.JWT_SECRET)
  let roleToken = jwt.sign({role: user.role_id}, process.env.JWT_SECRET)
  return [token, roleToken]
};

module.exports = router
