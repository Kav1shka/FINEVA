const express=require("express");
const router = express.Router();

const {Driverregister,Officeregister,Driverlogin,PoliceOfficerlogin}=require("../Controllers/AuthControllers");
console.log("Came here 2");
//Driver Routes
router.post("/DriverRegister",Driverregister);
 

router.post("/DriverLogin",Driverlogin);
//Police Officer Routes
router.post("/PoliceOfficerRegister",Officeregister);

router.post("/PoliceOfficerLogin",PoliceOfficerlogin);
module.exports= router;