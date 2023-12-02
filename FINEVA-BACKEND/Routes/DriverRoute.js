const express = require ("express");
const router = express.Router();

const{DriverReference, driverSearch,updateDriver} = require("../Controllers/DriverControllers");
router.post("/driverRef", DriverReference);
router.post("/driverSearch" , driverSearch);
router.post("/updateDriver",updateDriver);

module.exports = router;