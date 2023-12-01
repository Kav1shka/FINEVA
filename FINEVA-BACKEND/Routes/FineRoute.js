const express = require ("express");
const router = express.Router();

const{addFine, getFine, createHash} = require("../Controllers/FineDetailsController");
router.post("/addFine", addFine);
router.post("/getFine",getFine);
router.post("/createHash",createHash);
module.exports = router;