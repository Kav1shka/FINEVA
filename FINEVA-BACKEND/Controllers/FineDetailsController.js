const Driver = require("../Models/Driver.js");
const DriverRef = require("../Models/driverRef.js");
const PoliceOfficer = require("../Models/PoliceOfficer.js");
const Fine = require("../Models/FineDetails.js");
const { nanoid } = require("nanoid");
const { fineValidator } = require("../Validations.js");
const FineDetails = require("../Models/FineDetails.js");

const FineDetailsController = {
  addFine: async (req, res) => {
    try {
      const fineList = req.body.fineList;
      const fineDateTime = req.body.fineDateTime;
      const natureOfOffence = req.body.natureOfOffence;
      const fineAmount = req.body.fineAmount;
      const vehicleNumber = req.body.vehicleNumber;
      const PayStatus = req.body.payState;
      const LIN = req.body.LIN;
      const place = req.body.place;
      const DriverFirstName = req.body.DriverFirstName;
      const DriverLastName = req.body.DriverLastName;
      const DriverEmail = req.body.DriverEmail;
      const DriverContact = req.body.DriverContact;
      const DriverAddress = req.body.DriverAddress;
      const PoliceOfficerName = req.body.PoliceOfficerName;
      const PoliceOfficerRank = req.body.PoliceOfficerRank;
      const PoliceStation = req.body.PoliceStation;
      const fineID = nanoid();
      console.log(req.body);
      const errorMessage = fineValidator(
        fineID,
        vehicleNumber,
        place,
        fineDateTime,
        natureOfOffence
      );
      if (errorMessage) return res.status(400).json({ message: errorMessage });
      //console.log(refDetail);
      await new Fine({
        fineID,
        fineList,
        fineDateTime,
        natureOfOffence,
        fineAmount,
        vehicleNumber,
        PayStatus,
        LIN,
        place,
        DriverFirstName,
        DriverLastName,
        DriverEmail,
        DriverContact,
        DriverAddress,
        PoliceOfficerName,
        PoliceOfficerRank,
        PoliceStation,
      }).save();
      res.status(200).json({ message: "Fine Added successfully" });
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getFine: async (req, res)=>{
    try{
        const LIN = req.body.LIN;

        const fine = await FineDetails.find({"LIN":LIN});
        res.status(200).json({message: "Fine retrieved", fine});
    }catch(error){
        res.status(500).json({message: error.message});
    }
  },
};
module.exports = FineDetailsController;
