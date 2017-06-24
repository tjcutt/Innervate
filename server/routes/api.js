'use strict';
var survey = require('./survey');

const express = require(`express`);
const router = express.Router();

router.use('/survey', survey);

module.exports = router;
