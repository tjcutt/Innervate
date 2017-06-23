
'use strict';

const express = require('express');

const router = express.Router();
const knex = require('../knex');

// YOUR CODE HERE

router.get('/', (req, res, next) => {

  getClassifieds()
    .then(classifieds => {
      res.json(classifieds)
    })
})

router.get('/:id', (req, res, next) => {

  getClassifieds(req.params.id)
    .then(classifieds => {
      res.json(classifieds)
    })
})

router.post('/', (req, res, next) => {

  insertClassified(req.body)
    .then(classified => {
      res.json(classified[0])
    })
})

router.patch('/:id', (req, res, next) => {
  console.log('THIS IS THE BODY', req.body);
  changeClassified(req.params.id, req.body)
    .then(classified => {
      res.json(classified[0])
    })
})

router.delete('/:id', (req, res, next) => {
  console.log('THIS IS THE BODY', req.body);
  deleteClassified(req.params.id)
    .then(classified => {
      res.json(classified)
    })
})


const getClassifieds = (id) => id ? knex('classifieds').select(["id","title", "description", "price", "item_image", "created_at"]).where('id', id).first() : knex('classifieds').select(["id","title", "description", "price", "item_image", "created_at"])

const insertClassified = (classified) => knex('classifieds').insert(classified).returning(["id","title", "description", "price", "item_image"])

const changeClassified = (id, classified) => knex('classifieds').where('id', id).update(classified).returning(["id","title", "description", "price", "item_image"])

const deleteClassified = (id) => knex('classifieds').where('id', id).del().select(["id","title", "description", "price", "item_image"])

module.exports = router;
