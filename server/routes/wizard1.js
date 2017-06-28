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
      return insertDAS(proposal_id, req.body)
    })
  res.send('no');
})

function insertDAS(proposal_id, request){
  return Promise.all([
    insertDisorders(proposal_id, req.body.disorders),
    insertAfflictions(proposal_id, req.body.afflictions),
    insertSolutions(proposal_id, req.body.solutions)
  ]).then(function(results) {
    let [disorders, afflictions, solutions] = results;
    console.log(results);
    return results;
  })
}

function insertDisorders(proposal_id, reqDisorders){
  return
    knex('disorders')
      .whereIn('name', reqDisorders)
      .then((disorders) => {
        let disorderInserts = [];
        for(let i = 0; i < disorders.length; i++){
          knex('proposal_disorder')
            .insert({
              proposal_id:proposal_id,
              disorder_id:disorders[i].id
            }).then((result) => {
              disorderInserts.push(result[0]);
            })
        }
        return disorderInserts;
      })
}

function insertAfflictions(proposal_id, reqAfflictions){
  return
    knex('afflictions')
      .whereIn('name', reqAfflictions)
      .then((afflictions) => {
        let afflictionInserts = [];
        for(let i = 0; i < afflictions.length; i++){
          knex('proposal_affliction')
            .insert({
              proposal_id:proposal_id,
              affliction_id:afflictions[i].id
            }).then((result) => {
              afflictionInserts.push(result[0]);
            })
        }
        return afflictionInserts;
      })
}

function insertSolutions(proposal_id, reqSolutions){
  return
    knex('solutions')
      .whereIn('name', reqSolutions)
      .then((solutions) => {
        let solutionInserts = [];
        for(let i = 0; i < solutions.length; i++){
          knex('proposal_solution')
            .insert({
              proposal_id:proposal_id,
              solution_id:solutions[i].id
            }).then((result) => {
              solutionInserts.push(result[0]);
            })
        }
        return solutionInserts;
      })
}
module.exports = router;
