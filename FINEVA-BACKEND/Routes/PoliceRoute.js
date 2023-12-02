const express = require ("express");
const router = express.Router();

const {OfficerReference,updateOfficer,officerSearch} = require("../Controllers/PoliceOfficerControllers");

router.post("/OfficerRef", OfficerReference);
router.post("/updateOfficer",updateOfficer);   
router.post("/officerSearch",officerSearch);

module.exports = router;