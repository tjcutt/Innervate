const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const knex = require('../knex')
const bcrypt = require('bcryptjs')
require('dotenv');

router.post('/', function(req, res, next){
  knex('users')
        .returning('*')
        .insert({
        'first_name': req.body.first_name,
        'last_name': req.body.last_name,
        'email': req.body.email,
        'hashed_pass': bcrypt.hashSync(req.body.pass, 10)
        })
        .then((data) => {
          delete req.body.pass
          let adminPass = req.body.adminPass
          if (adminPass) {
            let userId = data[0].id
            return getPass(adminPass, userId)
          }
          // res.render('/survey')
        })
        .catch((error) => {
          next(error)
        })
    })

    function getPass(adminPass, id){
     return  knex('users')
          .whereIn('id', 4)
          .select('hashed_pass')
          .then((passInfo) => {
            let pass = passInfo[0].hashed_pass
            if (bcrypt.compareSync(adminPass, pass)){
                adminInsertRole(id)
            }
          })
    }

    function adminInsertRole(id){
      console.log('id', id);
        console.log('function call working!!!!');
      knex ('user_role')
        .insert({
          'user_id': id,
          'role_id': 5
        })
        .returning('*')
        .then((data)=> {
          // SEND THEM TO DATA ANALYTICS OR PROPOSAL page
          res.end
        })
    }


    function setTokens(user) {
        let token = jwt.sign({
            user: user
        }, process.env.JWT_SECRET)
        return token
    };

module.exports = router;
