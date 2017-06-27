var express = require('express');
var router = express.Router();
const knex = require('../knex');

/* GET All PROPOSALS. */
router.get('/', function(req, res, next) {
   console.log('yay!!!!')
   knex('proposals')
      .select('*')
      .then ((props) => {
         res.json(props)
      })
});



module.exports = router;
