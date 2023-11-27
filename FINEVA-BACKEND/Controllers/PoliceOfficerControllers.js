const Driver = require("../Models/Driver.js");
const DriverRef = require("../Models/driverRef.js");
const PoliceOfficer = require("../Models/PoliceOfficer.js");

const policeOfficerController = {

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
};
module.exports = policeOfficerController;
