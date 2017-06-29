const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const knex = require('../knex')
const bcrypt = require('bcryptjs')
require('dotenv');

router.post('/', function(req, res, next){
  // console.log('backend req', req.body)
  knex('users')
        .returning('*')
        .insert({
        'first_name': req.body.first_name,
        'last_name': req.body.last_name,
        'email': req.body.email,
        'hashed_pass': bcrypt.hashSync(req.body.pass, 10)
        })
        .select('*')
        .then((data) => {
          delete req.body.pass
          res.render('survey')
        })
        // .then((data) => {
        //   let tokens = setTokens(data)
        //   console.log('tokens on the back end', tokens)
        //   res.send(tokens)
        // })
        .catch((error) => {
          next(error)
        })
    })


    function setTokens(user) {
        let token = jwt.sign({
            user: user
        }, process.env.JWT_SECRET)
        return token
    };

module.exports = router;
