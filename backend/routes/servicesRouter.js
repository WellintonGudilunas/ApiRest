const router = require('express').Router();
const serviceController = require('../controller/serviceController');

router
    .route("/services")
    .post((req, res) => serviceController.create);

module.exports = router;