var express = require('express');
var router = express.Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');

/* GET All PROPOSALS. */
router.get('/', function(req, res, next) {
   knex('proposals')
      .select(['proposals.id', 'proposals.title', 'proposals.summary', 'proposals.info', 'proposals.votes', 'proposals.created_at', 'proposals.active', 'user_role.user_id', 'user_role.role_id', 'roles.name'])
      .join('user_role', 'user_role.user_id', 'proposals.user_id')
      .join('roles', 'roles.id', 'user_role.role_id')
      .then ((props) => {
         console.log('props', props);
         res.json(props)
      })
});

router.get('/:id', (req, res) => {
   let cookieJWT = req.cookies.user
   let userCookieId = jwt.verify(cookieJWT, process.env.JWT_SECRET)
   let userId = userCookieId.user.id

   knex ('proposals')
      .where('user_id', userId)
      .then ((props) => {
         res.json(props)
      })
})

router.post('/:id', (req, res) => {
   let id = req.params.id
   knex('proposals')
      .where('id', id)
      .increment('votes', 1)
      .then((data) => {
         res.json(data)
      })

})



module.exports = router;
