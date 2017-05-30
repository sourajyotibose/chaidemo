var express = require('express');
var router = express.Router();

var ctrlReports = require('../controllers/reports.controllers.js');
var ctrlEnvs = require('../controllers/environments.controllers.js');

router
  .route('/envs')
  .get(ctrlEnvs.envGetAll);

router
  .route('/envs/release')
  .get(ctrlEnvs.releaseGetAll);

router
  .route('/envs/currDate/:envId/:type')
  .get(ctrlReports.reportsGetByCurrentDate);

router
  .route('/envs/:date/:envId/:type')
  .get(ctrlReports.reportsGetByGivenDate);

router
  .route('/envs/currDate/:envId')
  .get(ctrlEnvs.envGetSingleEnv);

router
  .route('/reports')
  .get(ctrlReports.reportsGetAll);

router
  .route('/reports/:reportId')
  .get(ctrlReports.reportsGetOne);

router
  .route('/reports/:id/:number')
  .get(ctrlReports.updateJira);

  router
    .route('/result/:id/:result')
    .get(ctrlReports.updateResult);

router
  .route('/reports/:id/comments/:comment')
  .get(ctrlReports.updateComment);

module.exports = router;
