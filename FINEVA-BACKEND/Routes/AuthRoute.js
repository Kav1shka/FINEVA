const express=require("express");
const router = express.Router();

const {Driverregister,Officeregister,Driverlogin,PoliceOfficerlogin}=require("../Controllers/AuthControllers");
console.log("Came here 2");
//Driver Routes
router.post("/DriverRegister",Driverregister);
 

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