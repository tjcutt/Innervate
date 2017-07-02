var express = require('express');
var router = express.Router();
const knex = require('../knex');

router.get('/', (req, res) => {
   console.log('reaching backend prop DISORDER');
   knex('proposal_disorder')
      .select('disorder_id')
      .groupBy('disorder_id')
      .count('*')
      .then((data) =>{
         console.log('DATA DIS', data);
         res.send(data)
      })

})


module.exports = router;
