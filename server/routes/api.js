'use strict';
var survey = require('./survey');

const express = require(`express`);
const router = express.Router();

router.use('/survey', survey);

router.use('/homeForm', homeForm);

module.exports = router;
