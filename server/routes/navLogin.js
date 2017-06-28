const express = require('express')
const router = express.Router()
const knex = require('../knex')
const jwt = require('jsonwebtoken')
require('dotenv')

router.post('/', function(req, res, next) {
  // console.log('auth', req.body)
  knex('users')
    .join('user_role', 'user_role.user_id', 'users.id')
    .join('roles', 'user_role.role_id', 'roles.id')
    .where('email', req.body.email)
    .select('*')
    .then((data) => {
      // console.log('data[0]', data[0], req.body.email)
       let tokens = setTokens(data[0])
      // return tokens
      // res.setCookie('hey', 'tim')
      // res.cookie('user', tokens[0], {httpOnly: true})
      // res.cookie('role', tokens[1], {httpOnly: true})
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
