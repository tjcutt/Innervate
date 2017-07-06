var express = require('express');
var router = express.Router();
const knex = require('../knex');

router.get('/', (req, res) => {
   knex('proposal_affliction')
      .select('affliction_id')
      .groupBy('affliction_id')
      .count('*')
      .then((data) =>{
         let afflictionName = {
            1: "Motor Skills",
            2:"Sensory Deficits",
            3: "Language/Speech Barriers",
            4: "Safety Issues",
            5:"Medication Adherence",
            6: "Sleep Disturbance",
            7:"Working",
            8: "Transportation"
         }
         let namedData = data.map((el) => el.affliction_id = afflictionName[el.affliction_id])
         res.send(data)
      })

})


module.exports = router;
