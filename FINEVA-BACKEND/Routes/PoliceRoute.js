const express = require ("express");
const router = express.Router();

const {driverSearch} = require("../Controllers/PoliceOfficerControllers");
router.post("/driverSearch" , driverSearch);

module.exports = router;