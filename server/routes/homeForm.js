
const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
const knex = require('../knex');


router.post('/', function(req, res, next){
  console.log('backend req', req.body);
  knex('users')
        .returning('*')
        .insert({
        'first_name': req.body.first_name,
        'last_name': req.body.last_name,
        'email': req.body.email,
        'hashed_pass': req.body.hashed_pass})
        .then((done)=> {})
        // .then((user) => {
        //   console.log(user);
        // })
        res.send('working?');
    })




module.exports = router;
