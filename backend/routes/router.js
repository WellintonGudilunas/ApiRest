const router = require('express').Router();


//Services Router
const serviceRouter = require("./servicesRouter");
router.use("/", serviceRouter);


//Parties routes
const partyRouter = require("./partiesRouter");
router.use("/", partyRouter);

module.exports = router;