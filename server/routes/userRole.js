var express = require('express');
var router = express.Router();
const knex = require('../knex');

router.get('/', (req, res) => {
   knex('user_role')
      .whereNot('role_id', 5)
      .whereNot('role_id', 6)
      .select('role_id')
      .groupBy('role_id')
      .count('*')
      .then((data) =>{
         let roleName = {
            1: "Patient",
            2:"Caregiver",
            3: "Family",
            4: "Medical Professional"}
         let namedData = data.map((el) => el.role_id = roleName[el.role_id])
         res.send(data)
      })

})


module.exports = router;
