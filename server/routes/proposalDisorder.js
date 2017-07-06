var express = require('express');
var router = express.Router();
const knex = require('../knex');

router.get('/', (req, res) => {
   knex('proposal_disorder')
      .select('disorder_id')
      .groupBy('disorder_id')
      .count('*')
      .then((data) =>{
         let disorderName = {
            1: "Stroke",
            2: "Brain Injury",
            3: "Alzheimer's Disease and other Dementias",
            4: "Epilepsy",
            5: "Parkinson's Disease",
            6: "Autism Spectrum Disorders and Other Neurodevelopmental Disorders",
            7: "Multiple Sclerosis",
            8: "ALS and Other Neurodegenerative Disorders",
            9: "Spinal Cord Injury",
            10: "Migraine",
            11: "Other"
         }
         let namedData = data.map((el) => el.disorder_id = disorderName[el.disorder_id])
         res.send(data)
      })

})

// id: 1,
// name: 'Stroke'
// }, {
// id: 2,
// name: 'Brain Injury'
// }, {
// id: 3,
// name: `Alzheimer's Disease and other Dementias`
// },{
// id:4,
// name:'Epilepsy'
// } ,{
// id: 5,
// name: `Parkinson's Disease`
// }, {
// id: 6,
// name: 'Autism Spectrum Disorders and Other Neurodevelopmental Disorders'
// }, {
// id: 7,
// name: 'Multiple Sclerosis'
// }, {
// id: 8,
// name: 'ALS and Other Neurodegenerative Disorders'
// }, {
// id: 9,
// name: 'Spinal Cord Injury'
// }, {
// id: 10,
// name: 'Migraine'
// }, {
// id: 11,
// name: 'Other'
// }]);


module.exports = router;
