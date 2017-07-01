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
          delete req.body.pass
          delete data[0].hashed_pass
          console.log('the good stuff (data)'.america, data);
          let user = data[0]
          let adminPass = req.body.adminPass
          let userId = user.id
          if (adminPass.length > 0) {

            console.log('we have made it to capture this userId before we are returning getPass', userId);
            return getPass(adminPass, userId)
          } else {
            let userToken = jwt.sign({
                user: user
            }, process.env.JWT_SECRET)
            console.log('!!!!! THIS IS YOUR DATA FROM HOMEFORM', userToken);
            res.send({userToken: userToken})
          }
            })
            .catch((error) => {
              next(error)
        })
        })



    function getPass(adminPass, id){
      if (adminPass.length > 0)
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
          console.log('this is the data we have'.america, data[0].role_id);
          let roleData = data[0].role_id
          let role = jwt.sign({
              role: roleData
          }, process.env.JWT_SECRET)
            console.log('gots my role'.cyan, role);
            return role
          // res.send(role);
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
