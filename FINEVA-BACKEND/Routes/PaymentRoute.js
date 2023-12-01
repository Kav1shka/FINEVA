const express=require("express");
const router = express.Router();

const {checkout2}=require("../payhere");

// router.post("/Checkout1",checkout);

router.get("/Checkout2",checkout2);

module.exports= router;
