const express = require('express')
const router = express.Router()
const knex = require('../knex')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv');

router.post('/', function(req, res, next){
  console.log('We have made it to the homeForm page post');
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
          console.log('we have made it to the first then passing data within homeForm');
          let ultimateData = data
          console.log('here is req.body', req.body)
          ;
          delete req.body.pass
          // delete 'hashed_pass'
          // need to delete hashed pass from jwt
          console.log('here is our req.body.adminPass', req.body.adminPass);
          let adminPass = req.body.adminPass
          console.log('we have made it to adminPass', adminPass
          );

          if (adminPass.length > 0) {
            let userId = data[0].id
            console.log('we have made it to capture this userId before we are returning getPass', userId);
            return getPass(adminPass, userId)
          } else {
            console.log('eyah data', data);
            let tokens = setTokens(data[0]);
            console.log('!!!!! THIS IS YOUR DATA FROM HOMEFORM', tokens);
            res.send({tokens:tokens})
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
            return pass;
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
          let roleId = data[0].role_id
          console.log('data shiz biz', roleId);
          return roleId
          // SEND THEM TO DATA ANALYTICS OR PROPOSAL page
        })
    }

    function setTokens(user) {
      console.log('this is your user', user);
        let token = jwt.sign({
            user: user
        }, process.env.JWT_SECRET)
        console.log('is there a user.role_id', user.role_id);
        // if (user.role_id) {
        //   let roleToken = jwt.sign({
        //       role: user.role_id

        // })
      // }
        return token
      }
    // };



module.exports = router;
