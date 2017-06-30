const express = require('express')
const router = express.Router()
const knex = require('../knex')
const jwt = require('jsonwebtoken')
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
        .select('*')
        .then((data) => {
          delete req.body.pass
          let adminPass = req.body.adminPass
          if (adminPass.length > 0) {
            let userId = data[0].id
            console.log('!!!!! THIS IS YOUR DATA FROM HOMEFORM', data[0]);

            return getPass(adminPass, userId)
res.send(data[0])
          }

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
        console.log('function call working!!!!'.rainbow);
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
        let roleToken = jwt.sign({
            role: user.role_id
        }, process.env.JWT_SECRET)
        return [token, roleToken]
    };



module.exports = router;
