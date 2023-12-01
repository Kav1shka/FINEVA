const express = require ("express");
const router = express.Router();

const{addFine, getFine} = require("../Controllers/FineDetailsController");
router.post("/addFine", addFine);
router.post("/getFine",getFine);

module.exports = router;