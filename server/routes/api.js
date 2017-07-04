'use strict';

const proposals = require('./proposals');
const images = require('./images');
const homeForm = require('./homeForm');
const survey = require('./survey');
const wizard1 = require('./wizard1');
const wizard2 = require('./wizard2');
const votes = require('./votes');
const navLogin = require('./navLogin');
const userRole = require('./userRole');
const proposalSolution = require('./proposalSolution');
const proposalDisorder = require('./proposalDisorder');
const proposalAffliction = require('./proposalAffliction');
const role = require('./role');


const express = require(`express`);
const router = express.Router();

router.use('/survey', survey);
router.use('/proposals', proposals)
router.use('/images', images)
router.use('/homeForm', homeForm);
router.use('/survey', survey);
router.use('/wizard1', wizard1);
router.use('/wizard2', wizard2);
router.use('/votes', votes);
router.use('/navLogin', navLogin);
router.use('/userRole', userRole);
router.use('/proposalSolution', proposalSolution);
router.use('/proposalDisorder', proposalDisorder);
router.use('/proposalAffliction', proposalAffliction);
router.use('/role', role);

module.exports = router;
