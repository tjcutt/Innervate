var express = require('express');
var router = express.Router();
const knex = require('../knex');

router.post('/', function(req, res, next) {
   console.log('reqbody', req.body);
   let userId = req.body.userId
   let proposalId = req.body.proposalId
   knex('votes')
   .where("user_id", userId)
   .where("proposal_id", proposalId)
   .where("active", true)
   .then((data) => {
      console.log('then res',data.length);
      if (data.length > 0) res.json(data)
      else {
         knex('votes')
            .insert( )
      }
      res.json(data);
   })
});

// use below, if true (catch)
//
// .whereNot({
//    proposal_id: proposalId,
//    user_id:  userId
// })


module.exports = router;
