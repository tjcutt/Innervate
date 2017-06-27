var express = require('express');
var router = express.Router();
const knex = require('../knex');

router.get('/', function(req, res, next) {
   console.log('reqbody', req.body);
  res.send('connected');
});

// router.post('/', function(req, res, next){
//   console.log('hey i got here')
//   res.send('no');
// })

module.exports = router;
