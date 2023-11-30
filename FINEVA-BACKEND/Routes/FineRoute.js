const express = require ("express");
const router = express.Router();

const{addFine} = require("../Controllers/FineDetailsController");
router.post("/addFine", addFine);

module.exports = router;