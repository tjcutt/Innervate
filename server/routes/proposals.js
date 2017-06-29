var express = require('express');
var router = express.Router();
const knex = require('../knex');

/* GET All PROPOSALS. */
router.get('/', function(req, res, next) {
   console.log('yay!!!!')
   knex('proposals')
      .select('*')
      .then ((props) => {
         res.json(props)
      })
});

router.post('/:id', (req, res) => {
   console.log('TRYING TO ADD vote', req.params.id);
   let id = req.params.id
   knex('proposals')
      .where('id', id)
      .increment('votes', 1)
      .then((data) => {
         console.log('res', data);
         res.json(data)
      })

})



module.exports = router;
