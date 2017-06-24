var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
   knex(proposals)
      .select(*)
      .then ((props) => {
         res.json(props)
      })
});



module.exports = router;
