const express = require('express');
const router = express.Router();
const busRoute = require("../busRoutes/busRoute")


router.use("/route",busRoute);



module.exports = router;