var express = require('express');
var router = express.Router();
const knex = require('../knex');

router.get('/', function(req, res, next) {
 res.send('i connect');
});

router.post('/', function(req, res, next) {
 console.log(req.body)
 res.send('no');
})

function insertDAS(proposal_id, request) {
 return Promise.all([
   insertDisorders(proposal_id, request.disorders),
   insertAfflictions(proposal_id, request.afflictions),
   insertSolutions(proposal_id, request.solutions)
  ])
  .then(function(results) {
   let [disorders, afflictions, solutions] = results;
   return results;
  })
}

function insertDisorders(proposal_id, reqDisorders) {
 return knex('disorders')
  .whereIn('name', reqDisorders)
  .then((disorders) => {
   return Promise.all(
    disorders.map(function(disorder) {
     return knex('proposal_disorder')
      .insert({
       proposal_id: proposal_id,
       disorder_id: disorder.id
      })
      .returning('*')
      .then((result) => {
       console.log("PUSH IT", result[0]);
       return result[0]
      })
    }))
  })
}

function insertAfflictions(proposal_id, reqAfflictions) {
 return knex('afflictions')
  .whereIn('name', reqAfflictions)
  .then((afflictions) => {
   return Promise.all(
    afflictions.map(function(affliction) {
     return knex('proposal_affliction')
      .insert({
       proposal_id: proposal_id,
       affliction_id: affliction.id
      })
      .returning('*')
      .then((result) => {
       return result[0]
      })
    }))
  })
}

function insertSolutions(proposal_id, reqSolutions) {
 return knex('solutions')
  .whereIn('name', reqSolutions)
  .then((solutions) => {
   return Promise.all(
    solutions.map(function(solution) {
     return knex('proposal_solution')
      .insert({
       proposal_id: proposal_id,
       solution_id: solution.id
      })
      .returning('*')
      .then((result) => {
       return result[0]
      })
    }))
  })
}
module.exports = router;
