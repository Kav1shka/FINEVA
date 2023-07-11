const express=require("express");
const router = express.Router();

const {register,login}=require("../Controllers/AuthControllers");

//Driver Routes
router.post("/DriverRegister",function(req,res){
    register
});

router.post("/DriverLogin",function(req,res){
    login
});
//Police Officer Routes
router.post("/PoliceOfficerRegister",function(req,res){
    register
});

router.post("/PoliceOfficerLogin",function(req,res){
    login
});
module.exports= router;