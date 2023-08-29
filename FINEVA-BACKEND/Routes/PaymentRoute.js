const express=require("express");
const router = express.Router();

const {checkout}=require("../payhere");

router.post("/Checkout",checkout);

module.exports= router;