const { registerValidDriver, registerValidPoliceOfficer, DriverdloginValid, OfficerloginValid } = require("../Validations.js");
const Driver = require("../Models/Driver.js");
const DriverRef = require("../Models/driverRef.js");
const PoliceOfficer = require("../Models/PoliceOfficer.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const OfficerRef = require("../Models/officerRef.js");

const authController = {
  
  //Driver register
  Driverregister: async (req, res) => {
    try {
      const Email = req.body.Email;
      const Fname = req.body.Fname;
      const Lname = req.body.Lname;
      const Password = req.body.Password;
      const cfPassword = req.body.password2;
      const NIC = req.body.NIC;
      const LIN = req.body.LIN;
      const Province = req.body.Province;
      const District  = req.body.District;
      const Address = req.body.Address;
      const Gender = req.body.Gender;
      const Contact = req.body.Contact;
      const errorMessage = registerValidDriver(
      Email ,
      Fname ,
      Lname ,
      Password ,
      cfPassword,
      NIC ,
      LIN ,
      Province ,
      District,
      Gender,
      Address,
      Contact,
      )
      if (errorMessage) return res.status(400).json({ message: errorMessage });
      const DriverExists = await Driver.findOne({ NIC });
      if (DriverExists) {
        return res
          .status(400)
          .json({ message: "This NIC Already Uesd" });
      }
      if (Password !== cfPassword){
          return res
          .status(400)
          .json({message: "Passwords do not match"})
      }
      const RefDetail = await DriverRef.findOne({NIC}) || DriverRef.findOne({LIN});
     // console.log(RefDetail.NIC+ " + " +RefDetail.LIN);
      if(NIC !== RefDetail.NIC || LIN !== RefDetail.LIN){
        return res.status(400).json({message: "Invalid NIC or Licence Number!"});
      }
      const hashedPassword = await bcrypt.hash(Password, 10);
      await new Driver({
        Email ,
        Fname ,
        Lname ,
        Password :hashedPassword,
        NIC ,
        LIN ,
        Province ,
        District ,
        Gender,
        Contact,
        Address,
      }).save();
      res.status(201).json({
        message: "You have successfully registered. Please login now",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  //police officer register
  Officeregister: async (req, res) => {
    try {
      const Email = req.body.Email;
      const Fname = req.body.Fname;
      const Lname = req.body.Lname;
      const Password = req.body.Password;
      const cfPassword = req.body.password2;
      const Contact = req.body.Contact;
      const RegiNumber = req.body.RegiNumber;
      const Rank = req.body.Rank;
      const Station = req.body.Station;
      console.log(req.body);
      const errorMessage = registerValidPoliceOfficer(
      Email ,
      Fname ,
      Lname ,
      Password ,
      cfPassword,
      Contact ,
      RegiNumber,
      Rank,
      Station,
      )
      if (errorMessage) return res.status(400).json({ message: errorMessage });
      const OfficerRefMatch = await OfficerRef.findOne({RegiNumber});
      if(OfficerRefMatch){
        return res.status(400).json({message: "Invalid Registration Number"});
      }
      const PoliceOFfficerExists = await PoliceOfficer.findOne({ RegiNumber });
      if (PoliceOFfficerExists) {
        return res
          .status(400)
          .json({ message: "This Service ID is already in use!" });
      }
      if (Password !== cfPassword){
        return res
        .status(400)
        .json({message: "Passwords do not match"})
    }
      const hashedPassword = await bcrypt.hash(Password, 10);
      await new PoliceOfficer({
        Email ,
        Fname ,
        Lname ,
        Password : hashedPassword,
        Contact ,
        RegiNumber ,
        Rank,
        Station,
      }).save();
      res.status(201).json({
        message: "You have successfully registered. Please login now",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },

  // Driver login
  Driverlogin: async (req, res) => {
    try {
      const NIC = req.body.ID;
      const Password = req.body.password;
      //const { NIC, Password } = req.body;
      const errorMessage = DriverdloginValid(NIC, Password);
      if (errorMessage) return res.status(400).json({ message: errorMessage });
      const driver = await Driver.findOne({ NIC });

      const details =async()=>{
        return await Driver.findOne(Driver);
      } 
      if (!driver){
        return res.status(400).json({ message: "Not registered NIC" });
      }
      const match = await bcrypt.compare(Password, driver.Password);

      if (!match) {
        return res.status(400).json({ message: "Invalid NIC or password" });
      }

      const token = jwt.sign({ _id: Driver._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      Driver.password = undefined;

      res
        .status(200)
        .json({
          message: "You have successfully logged in",
          driver,
          token,
          //details,
        });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },

  //PoliceOfficer Login 
  PoliceOfficerlogin: async (req, res) => {
    try {
      const RegiNumber = req.body.ID;
      const Password = req.body.password;
      //const { RegiNumber, Password } = req.body;
      console.log(req.body);
      const errorMessage = OfficerloginValid(RegiNumber, Password);
      // console.log(errorMessage);
      if (errorMessage) return res.status(400).json({ message: errorMessage });

      const FoundPoliceOfficer = await PoliceOfficer.findOne({ RegiNumber });
      console.log(FoundPoliceOfficer);
      // const details = await PoliceOfficer.findOne(FoundPoliceOfficer);
      if (!FoundPoliceOfficer)
        return res.status(400).json({ message: "Not registered Service Number!" });

      const match = await bcrypt.compare(Password, FoundPoliceOfficer.Password);

      console.log(match);
      if (!match) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const token = jwt.sign({ _id: PoliceOfficer._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      PoliceOfficer.Password = undefined;

      // Customer.password = undefined;
      // Customer.password = undefined;
      res
        .status(200)
        .json({
          message: "You have successfully logged in",
          FoundPoliceOfficer,
          token,
          //details,
        });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};
module.exports = authController;
