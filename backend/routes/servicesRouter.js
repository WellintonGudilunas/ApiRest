const router = require('express').Router();
const serviceController = require('../controller/serviceController');

router
    .route("/services")
    .post((req, res) => serviceController.create(req, res));


router.route("/services").get((req, res) => serviceController.getAll(req, res));
module.exports = router;