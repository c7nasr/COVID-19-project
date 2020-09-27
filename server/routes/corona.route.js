const express = require('express');
const coronaController = require('../controller/corona.controller');

const router = express.Router();
router
    .route('/now')
    .get(coronaController.getNow)

router
    .route('/prediction')
    .get(coronaController.prediction)
router
    .route('/past')
    .get(coronaController.history)


router.route("/pushToken").post(coronaController.pushToken)

module.exports = router;
 