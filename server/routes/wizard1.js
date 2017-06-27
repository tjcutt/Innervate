var express = require('express');
var router = express.Router();
const knex = require('../knex');

router.get('/', function(req, res, next) {
  res.send('i connect');
});

router.post('/', function(req, res, next){
  console.log(req.body)
  res.send('no');
})

module.exports = router;
