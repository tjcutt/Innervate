
const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
const knex = require('../knex');

router.post('/', function(req, res, next){
  knex('users')
        .returning('*')
        // .insert({
        //   req
        // })
        .then((user) => {
          console.log(user);
        })
    })
  res.send('working?');
})


module.exports = router;
