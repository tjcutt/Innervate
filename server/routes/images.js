var express = require('express');
var router = express.Router();
const knex = require('../knex');

/* GET All PROPOSALS. */
router.get('/:id', function(req, res, next) {
   let id = req.params.id
   console.log('yay!!!!!!!!!!!!!!!!!!!!!', req.params.id)
   knex('images')
      .where('proposal_id', id)
      .first()
      .then ((props) => {
         console.log('backend props', props.url);
         res.json(props.url)
      })
});


module.exports = router;
