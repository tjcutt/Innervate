const express = require('express')
const router = express.Router()
const knex = require('../knex')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv');

router.post('/', function(req, res, next){
  console.log('We have made it to the homeForm page post');
  let userToken = null
  let roleToken = null
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
          userToken = jwt.sign({
              user: user
          }, process.env.JWT_SECRET)
          if (adminPass.length > 0) {
            knex('users')
                 .whereIn('id', 4)
                 .select('hashed_pass')
                 .then((passInfo) => {
                   let pass = passInfo[0].hashed_pass
                   if (bcrypt.compareSync(adminPass, pass)){
                     knex ('user_role')
                         .insert({
                           'user_id': userId,
                           'role_id': 5
                         })
                         .returning('*')
                         .then((data)=> {
                           let roleData = data[0].role_id
                           roleToken = jwt.sign({
                               role: roleData
                           }, process.env.JWT_SECRET)
                             console.log('gots my role'.cyan, roleToken, 'userToken'.blue, userToken);
                             res.send([userToken, roleToken])
                         })
                     }

                   })
          }else {
            res.send([userToken])
          }
        })
        // .then(data => {
        //       console.log('what data do we get after our if else call'.rainbow, data);})
        .catch((error) => {
        next(error)
        })
        })



    function getPass(adminPass, id, userToken){
     return  knex('users')
          .whereIn('id', 4)
          .select('hashed_pass')
          .then((passInfo) => {
            let pass = passInfo[0].hashed_pass
            if (bcrypt.compareSync(adminPass, pass)){
              knex ('user_role')
                  .insert({
                    'user_id': id,
                    'role_id': 5
                  })
                  .returning('*')
                  .then((data)=> {
                    let roleData = data[0].role_id
                    roleToken = jwt.sign({
                        role: roleData
                    }, process.env.JWT_SECRET)
                      console.log('gots my role'.cyan, roleToken, 'userToken'.blue, userToken);
                      res.send([roleToken, userToken])
                  })
              }
            })
          }
    //       })
    // }

    function adminInsertRole(id){
        console.log('function call working!!!!'.rainbow);
    return knex ('user_role')
        .insert({
          'user_id': id,
          'role_id': 5
        })
        .returning('*')
        .then((data)=> {
          let roleData = data[0].role_id
          roleToken = jwt.sign({
              role: roleData
          }, process.env.JWT_SECRET)
            console.log('gots my role'.cyan, roleToken);
            return roleToken
        })
    }

    // function setTokens(user) {
    //   console.log('this is your user', user);


      //   let roleToken = jwt.sign({
      //       user: user
      //   }, process.env.JWT_SECRET)
      //   console.log('is there a user.role_id', user.role_id);
      //   // if (user.role_id) {
      //   //   let roleToken = jwt.sign({
      //   //       role: user.role_id
      //
      //   // })
      // // }
      //   return token
      // }
    // };



module.exports = router;
