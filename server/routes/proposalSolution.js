var express = require('express');
var router = express.Router();
const knex = require('../knex');

router.get('/', (req, res) => {
   console.log('reaching backend SOLUTIONS' );
   knex('proposal_solution')
      .select('solution_id')
      .groupBy('solution_id')
      .count('*')
      .then((data) =>{
         console.log('DATA SOLUTIONS', data);
         res.send(data)
      })

})


module.exports = router;
