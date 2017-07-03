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
         let solutionName = {
            1: "Assistive Devices",
            2:"Biomarker Development",
            3: "Alert Systems",
            4: "Integrating Existing Systems/Data Analytics",
            5:"Services",
            6: "Apps"
         }
         let namedData = data.map((el) => el.solution_id = solutionName[el.solution_id])
         res.send(data)
      })

})

module.exports = router;
