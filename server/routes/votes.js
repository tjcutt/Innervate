var express = require('express');
var router = express.Router();
const knex = require('../knex');

router.post('/:id', (req, res, next) => {
   console.log('backend id', req.body);
   let proposalId = req.body.id
   knex('votes')
      .where('proposal_id', proposalId)
      .count('active')
      .then((num)=> {
         res.send(num[0].count)
      })
})

router.post('/', function(req, res, next) {
   let userId = req.body.userId
   let proposalId = req.body.proposalId
   console.log('proposdoc', proposalId);
   let body =
        { 'proposal_id': proposalId,
          'user_id': userId,
          'active': true }
   knex('votes')
   .where("user_id", userId)
   .where("proposal_id", proposalId)
   .where("active", true)
   .then((data) => {
      if (data.length > 0) console.log('exxists',data[0]), res.send(data[0])
      else {
         knex('votes')
            .insert(body)
            .then ((data) => {
               console.log('insertying');
               res.send(data[0])
            })
      }
   })
});

// use below, if true (catch)
//
// .whereNot({
//    proposal_id: proposalId,
//    user_id:  userId
// })


module.exports = router;
