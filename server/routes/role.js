const express = require('express');
const router = express.Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
   let cookieJWT = req.cookies.role
   let roleCookieId = jwt.verify(cookieJWT, process.env.JWT_SECRET)
   let roleId = roleCookieId.role
   console.log('USER ID after decode', roleId);
   res.json(roleId)
})


module.exports = router;
