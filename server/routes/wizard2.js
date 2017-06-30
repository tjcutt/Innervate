var express = require('express');
var router = express.Router();
const knex = require('../knex');

router.get('/', function(req, res, next) {
 res.send('i connect');
});

router.post('/', function(req, res, next) {
 knex("proposals")
  .where('id', req.cookies.proposal_id)
  .update('info', req.body.info)
  .returning('*')
  .then((proposal) => {
    let proposal_id = proposal[0].id;
    return insertIAV(proposal_id, req.body)
  })
 res.send('no');
})

function insertIAV(proposal_id, request) {
 return Promise.all([
   insertImages(proposal_id, request.images),
   insertArticles(proposal_id, request.articles),
   insertVideos(proposal_id, request.videos)
  ])
  .then(function(results) {
   let [images, articles, videos] = results;
   return results;
  })
}

function insertImages(proposal_id, reqImages) {
   return Promise.all(
    reqImages.map(function(image) {
     return knex('images')
      .insert({
       proposal_id: proposal_id,
       url:image
      })
      .returning('*')
      .then((result) => {
       return result[0]
      })
    }))
}

function insertArticles(proposal_id, reqArticles) {
   return Promise.all(
    reqArticles.map(function(article) {
     return knex('articles')
      .insert({
       proposal_id: proposal_id,
       url:article
      })
      .returning('*')
      .then((result) => {
       return result[0]
      })
    }))
}

function insertVideos(proposal_id, reqVideos) {
   return Promise.all(
    reqVideos.map(function(video) {
     return knex('videos')
      .insert({
       proposal_id: proposal_id,
       url:video
      })
      .returning('*')
      .then((result) => {
       return result[0]
      })
    }))
}
module.exports = router;
