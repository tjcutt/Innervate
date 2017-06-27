'use strict';

const proposals = require('./proposals');
const images = require('./images');
const homeForm = require('./homeForm');
const survey = require('./survey');
const wizard1 = require('./wizard1');

const express = require(`express`);
const router = express.Router();

router.use('/survey', survey);
router.use('/proposals', proposals)
router.use('/images', images)
router.use('/homeForm', homeForm);
router.use('/survey', survey);
router.use('/wizard1', wizard1);

module.exports = router;
