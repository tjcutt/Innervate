var express = require('express');
var router = express.Router();
const knex = require('../knex');

router.post('/:id', (req, res, next) => {
   //this grabs the number of votes on a specific proposal
   let proposalId = req.body.id
   knex('votes')
      .where('proposal_id', proposalId)
      .count('active')
      .where('active', true)
      .then((num)=> {
         console.log('this is counts number', num[0]);
         res.send(num[0].count)
      })
})

router.post('/', function(req, res, next) {
   let userId = req.body.userId
   let proposalId = req.body.proposalId
   let body =
        { 'proposal_id': proposalId,
          'user_id': userId,
          'active': true }
   knex('votes')
   .where("user_id", userId)
   .where("proposal_id", proposalId)
   .where("active", true)
   .then((data) => {
      console.log('this is data', data);
      if (data.length > 0) console.log('DONT ADD',data[0]), res.send('false')
      else {
         knex('votes')
            .insert(body)
            .then ((data) => {
               console.log('ADD',data[0]);
               res.send('true')
            })
      }
   })
});



module.exports = router;
