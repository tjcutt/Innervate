var express = require('express');
var router = express.Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');

router.post('/:id', (req, res, next) => {
   //this grabs the number of votes on a specific proposal
   let proposalId = req.body.id
   knex('votes')
      .join('user_role',' user_role.user_id', 'votes.user_id')
      .where('proposal_id', proposalId)
      .count('active')
      .where('active', true)
      .select(['user_role.role_id' ])
      .groupBy(['user_role.role_id' ])
         .then((num)=> {
            let votes = num.reduce((acc, el) => acc + parseInt(el.count) ,0)
            console.log('votesss', votes);
            console.log('tprop id and count', proposalId, num);
            res.json([votes, num])
         })
})

router.post('/', function(req, res, next) {
   console.log('rec COOKIES', req.cookies.user);
   let cookieJWT = req.cookies.user
   let userCookieId = jwt.verify(cookieJWT, process.env.JWT_SECRET)
   let userId = userCookieId.user.id
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
      if (data.length > 0) res.send('false')
      else {
         knex('votes')
            .insert(body)
            .then ((data) => {
               res.send('true')
            })
      }
   })
});




// knex('votes')
//    .where('proposal_id', proposalId)
//    .count('active')
//    .where('active', true)
//    .then((num)=> {
//       console.log('tprop id and count', proposalId, num[0]);
//       res.send(num[0].count)
//    })

module.exports = router;
