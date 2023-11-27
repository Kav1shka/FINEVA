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
}
module.exports = DriverController;