const Driver = require("../Models/Driver.js");
const DriverRef = require("../Models/driverRef.js");
const OfficerRef = require("../Models/officerRef.js");
const PoliceOfficer = require("../Models/PoliceOfficer.js");

const policeOfficerController = {
  
  OfficerReference: async (req, res) =>{
    try{
      const RegiNumber = req.body.RegiNumber;
      const station = req.body.station;
      const stationEmail = req.body.stationEmail;
      const OfficerRefExists = await OfficerRef.findOne({RegiNumber});
      if (OfficerRefExists) {
        return res.status(400).json({message: "Registration Number exists"});
      }
      await new OfficerRef({
        RegiNumber,
        station,
        stationEmail,
      }).save();
      res.status(201).json({message: "Data Added Successfully."});
    }
    catch(error){
      console.log(error);
      res.status(500).json({message: error.message})
    }
  },
};
module.exports = policeOfficerController;
