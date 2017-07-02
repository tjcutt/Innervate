var express = require('express');
var router = express.Router();
const knex = require('../knex');

router.get('/', (req, res) => {
   console.log('reaching backend Afflictions');
   knex('proposal_affliction')
      .select('affliction_id')
      .groupBy('affliction_id')
      .count('*')
      .then((data) =>{
         console.log('DATA afflictions', data);
         res.send(data)
      })

})


module.exports = router;
