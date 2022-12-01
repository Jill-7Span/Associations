const express = require('express');
const router = express.Router();
const busController = require("./busRouteController")

router.get("/getStation",busController.getStation);
router.post ("/stations",busController.busRoute);
router.put("/updateRouter",busController.updateRouter);
router.put("/deleteStation",busController.deleteStation)


module.exports = router;