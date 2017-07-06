var express = require('express');
var router = express.Router();
const knex = require('../knex');

/* GET All PROPOSALS. */
router.get('/:id', function(req, res, next) {
   let id = req.params.id
   knex('images')
      .where('proposal_id', id)
      .first()
      .then ((props) => {
         res.json(props.url)
      })
});


module.exports = router;
