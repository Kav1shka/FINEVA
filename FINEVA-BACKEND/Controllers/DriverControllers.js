const Driver = require("../Models/Driver.js");
const DriverRef = require("../Models/driverRef.js");
const PoliceOfficer = require("../Models/PoliceOfficer.js");

const DriverController = {
DriverReference: async (req, res) =>{
    try{
      const NIC = req.body.NIC;
      const LIN = req.body.LIN;
      const DriverRefExists = await DriverRef.findOne({NIC}) || DriverRef.findOne({LIN});
      if (DriverRefExists) {
        return res.status(400).json({message: "NIC exists"});
      }
      await new DriverRef({
        NIC,
        LIN
      }).save();
      res.status(201).json({message: "Data Added Successfully."});
    }
    catch(error){
      console.log(error);
      res.status(500).json({message: error.message})
    }
  },

  driverSearch: async (req, res) => {
    try {
      const LIN = req.body.LIN;
      const refDetail = await DriverRef.findOne({ LIN });
      //console.log(refDetail);
      if (!refDetail)return res.status(400).json({ message: "Invalid Licence Number!" });

      const driver = await Driver.findOne({ LIN });
      console.log(driver);

      if (!driver)return res.status(400).json({ message: "Not registered Licence Number!" });
      
      res.status(200).json({ message: "Driver found", driver});
    } 
    catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
}
module.exports = DriverController;