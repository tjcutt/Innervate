
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const knex = require('../knex');
require('dotenv');


router.post('/', function(req, res, next){
  console.log('backend req', req.body);
  knex('users')
        .returning('*')
        .insert({
        'first_name': req.body.first_name,
        'last_name': req.body.last_name,
        'email': req.body.email,
        'hashed_pass': req.body.hashed_pass})
        .then((data)=> {
          delete req.body.hashed_pass
          console.log(data[0].id);
          let token = jwt.sign({
                        id: data[0].id
                    }, process.env.JWT_SECRET)
                    res.cookie('token', token, {
                        httpOnly: true
                    })
        })
        .then((done)=> {})
    })


module.exports = router;
