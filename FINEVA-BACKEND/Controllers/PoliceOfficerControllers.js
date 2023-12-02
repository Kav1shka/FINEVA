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

  officerSearch: async (req, res) => {
    try {
      const RegiNumber = req.body.RegiNumber;
      const officer = await PoliceOfficer.findOne({ RegiNumber });
      console.log(officer);

      if (!officer)return res.status(400).json({ message: "Not registered Licence Number!" });
      
      res.status(200).json({ message: "officer found", officer});
    } 
    catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateOfficer: async (req,res) =>{
    try{
      const RegiNumber = req.body.RegiNumber;
      const Rank = req.body.Rank;
      const Station = req.body.Station;
      console.log(RegiNumber,Rank,Station);

      await PoliceOfficer.updateMany({RegiNumber:RegiNumber},{
        $set:{Rank:Rank,Station:Station}
      })
      res.status(200).json({message: "Profile Updated!"});
    }
    catch(error){
      res.status(500).json({message: error.message});
    }
  }
};
module.exports = policeOfficerController;
