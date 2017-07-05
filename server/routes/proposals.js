var express = require('express');
var router = express.Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');

/* GET All PROPOSALS. */
router.get('/', function(req, res, next) {
   knex('proposals')
      .select('*')
      .then ((props) => {
         res.json(props)
      })
});

router.get('/:id', (req, res) => {
   let cookieJWT = req.cookies.user
   let userCookieId = jwt.verify(cookieJWT, process.env.JWT_SECRET)
   console.log('USER ID after decode', userCookieId);
   let userId = userCookieId.user.id
   console.log('USER ID after specifying', userId);

   knex ('proposals')
      .where('user_id', userId)
      .then ((props) => {
         console.log('my props', props);
         res.json(props)
      })

})

router.post('/:id', (req, res) => {
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
