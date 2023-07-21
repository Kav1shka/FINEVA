const express=require("express");
const router = express.Router();

const {Driverregister,Officeregister,Driverlogin,PoliceOfficerlogin}=require("../Controllers/AuthControllers");

//Driver Routes
router.post("/DriverRegister",function(req,res){
    Driverregister
});

router.post("/DriverLogin",function(req,res){
    Driverlogin
});
//Police Officer Routes
router.post("/PoliceOfficerRegister",function(req,res){
    Officeregister
});

router.post("/PoliceOfficerLogin",function(req,res){
    PoliceOfficerlogin
});
module.exports= router;