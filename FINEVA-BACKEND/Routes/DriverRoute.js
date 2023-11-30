const express = require ("express");
const router = express.Router();

const{DriverReference, driverSearch} = require("../Controllers/DriverControllers");
router.post("/driverRef", DriverReference);
router.post("/driverSearch" , driverSearch);

module.exports = router;