const express = require ("express");
const router = express.Router();

const{DriverReference} = require("../Controllers/DriverControllers");
router.post("/driverRef", DriverReference);

module.exports = router;