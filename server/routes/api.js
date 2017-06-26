'use strict';
const survey = require('./survey');
const homeForm = require('./homeForm');

const express = require(`express`);
const router = express.Router();

router.use('/survey', survey);

router.use('/homeForm', homeForm);

module.exports = router;
