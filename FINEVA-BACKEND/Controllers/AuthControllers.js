const { registerValidDriver, registerValidPoliceOfficer,DriverdloginValid,OfficerloginValid } = require("../Validations.js");
const Driver = require("../Models/Driver.js");
const PoliceOfficer = require("../Models/PoliceOfficer.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authController = {
  
  //Driver register
  Driverregister: async (req, res) => {
    try {
      const Email = req.body.Email;
      const Fname = req.body.Fname;
      const Lname = req.body.Lname;
      const Password = req.body.Password;
      const NIC = req.body.NIC;
      const Province = req.body.Province;
      const District  = req.body.District;
      const errorMessage = registerValidDriver(
      Email ,
      Fname ,
      Lname ,
      Password ,
      NIC ,
      Province ,
      District 
      )
      if (errorMessage) return res.status(400).json({ message: errorMessage });
      const DriverExists = await Driver.findOne({ NIC });
      if (DriverExists) {
        return res
          .status(400)
          .json({ message: "This NIC Already Uesd" });
      }
      const hashedPassword = await bcrypt.hash(Password, 10);
      await new Driver({
        Email ,
        Fname ,
        Lname ,
        Password :hashedPassword,
        NIC ,
        Province ,
        District 
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
      const Contact = req.body.Contact;
      const RegiNumber = req.body.RegiNumber;
      const errorMessage = registerValidPoliceOfficer(
      Email ,
      Fname ,
      Lname ,
      Password ,
      Contact ,
      RegiNumber 
      )
      if (errorMessage) return res.status(400).json({ message: errorMessage });
      const PoliceOFfficerExists = await PoliceOfficer.findOne({ RegiNumber });
      if (PoliceOFfficerExists) {
        return res
          .status(400)
          .json({ message: "This email is already in use!!!!" });
      }
      const hashedRegisterNUM = await bcrypt.hash(RegiNumber, 10);
      await new PoliceOfficer({
        Email ,
        Fname ,
        Lname ,
        Password ,
        Contact ,
        RegiNumber:hashedRegisterNUM
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
      const { NIC, Password } = req.body;
      const errorMessage = DriverdloginValid(NIC, Password);
      if (errorMessage) return res.status(400).json({ message: errorMessage });
      const driver = await Driver.findOne({ NIC });

      const details =async()=>{
        return await Driver.findOne(Driver);
      } 
      if (!driver)
        return res.status(400).json({ message: "Not registered NIC" });

      const match = await bcrypt.compare(Password, driver.Password);

      console.log(match);
      if (!match) {
        return res.status(400).json({ message: "Invalid NIC or password" });
      }

      const token = jwt.sign({ _id: Driver._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      Driver.password = undefined;

      // Customer.password = undefined;
      // Customer.password = undefined;
      res
        .status(200)
        .json({
          message: "You have successfully logged in",
          Driver,
          token,
          details,
        });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },

  //PoliceOfficer Login 
  PoliceOfficerlogin: async (req, res) => {
    try {
      const { RegiNumber, Password } = req.body;
      console.log(req.body);
      const errorMessage = OfficerloginValid(RegiNumber, Password);
      // console.log(errorMessage);
      if (errorMessage) return res.status(400).json({ message: errorMessage });

      const FoundPoliceOfficer = await PoliceOfficer.findOne({ RegiNumber });
      console.log(FoundPoliceOfficer);
      // const details = await PoliceOfficer.findOne(FoundPoliceOfficer);
      if (!FoundPoliceOfficer)
        return res.status(400).json({ message: "Not registered NIC" });

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
          PoliceOfficer,
          token,
          details,
        });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};
module.exports = authController;
