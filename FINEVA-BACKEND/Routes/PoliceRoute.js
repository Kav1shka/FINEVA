const express = require ("express");
const router = express.Router();

const {OfficerReference} = require("../Controllers/PoliceOfficerControllers");

router.post("/OfficerRef", OfficerReference);   

module.exports = router;