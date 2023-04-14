const router = require('express').Router();


//Services Router
const serviceRouter = require("./servicesRouter");
router.use("/", serviceRouter);


module.exports = router;