const express=require("express");
const router = express.Router();

const {Driverregister,Officeregister,Driverlogin,PoliceOfficerlogin}=require("../Controllers/AuthControllers");
//Driver Routes
router.post("/DriverRegister",Driverregister);
router.post("/DriverLogin",Driverlogin);

//Police Officer Routes
router.post("/PoliceOfficerRegister",Officeregister);
router.post("/PoliceOfficerLogin",PoliceOfficerlogin);

module.exports= router;