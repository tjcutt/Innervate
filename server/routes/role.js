const express = require('express');
const router = express.Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
   if (req.cookies.role.length == 2);
   let cookieJWT = req.cookies.role

   let roleCookieId = jwt.verify(cookieJWT, process.env.JWT_SECRET)
   let roleId = roleCookieId.role
   res.json(roleId)
})


module.exports = router;
