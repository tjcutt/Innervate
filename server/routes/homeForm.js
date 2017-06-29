const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const knex = require('../knex')
const bcrypt = require('bcryptjs')
require('dotenv');

router.post('/', function(req, res, next){
  console.log('backend req', req.body)
  knex('users')
        .returning('*')
        .insert({
        'first_name': req.body.first_name,
        'last_name': req.body.last_name,
        'email': req.body.email,
        'hashed_pass': bcrypt.hashSync(req.body.pass, 10)
        })
        .then((data) => {
          console.log('backend data', data);;
          delete req.body.pass
          let adminPass = req.body.adminPass
          console.log('adminPass', adminPass);
          if (adminPass) {
            // let userId = data[0].id
            return getPass(adminPass)
            // adminInsertRole(userId, adminPass)
          }
          res.render('/survey')
        })
        .catch((error) => {
          next(error)
        })
    })

    function getPass(adminPass){
     return  knex('users')
          .whereIn('id', 4)
          .select('hashed_pass')
          .then((passInfo) => {
            let pass = passInfo[0].hashed_pass
            if (bcrypt.compareSync(adminPass, pass)){
                console.log('woohoo')
            }
          })
    }

    function adminInsertRole(id){
      console.log('function call working!!!!');
      // knex ('user_role')
      //   .returning('*')
      //   .where()
    }


    function setTokens(user) {
        let token = jwt.sign({
            user: user
        }, process.env.JWT_SECRET)
        return token
    };

module.exports = router;
