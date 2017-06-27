var express = require('express');
var router = express.Router();
const knex = require('../knex');

router.get('/', function(req, res, next) {
  res.send('i connect');
});

router.post('/', function(req, res, next){
  knex('proposals')
    .returning('*')
    .insert({
      user_id:1,
      title:req.body.title,
      story:req.body.story,
      summary:req.body.summary,
      created_by_user_id:1,
      edited_by_user_id:1
    })
    .then((proposal) => {
      let proposal_id = proposal[0].id;
      
    })
  res.send('no');
})


function insertDisorders(proposal_id, req){

}
module.exports = router;
