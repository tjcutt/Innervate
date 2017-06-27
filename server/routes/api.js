'use strict';
const homeForm = require('./homeForm');
const survey = require('./survey');
const wizard1 = require('./wizard1');

const express = require(`express`);
const router = express.Router();

router.use('/homeForm', homeForm);
router.use('/survey', survey);
router.use('/wizard1', wizard1);

module.exports = router;
