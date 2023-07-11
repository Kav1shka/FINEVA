const { registerValid, loginValid } = require("../validations.js");
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
      const errorMessage = registerValid(
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
      const hashedPassword = await bcrypt.hash(password, 10);
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
      const errorMessage = registerValid(
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
      const { NIC, password } = req.body;
      const errorMessage = loginValid(NIC, password);
      if (errorMessage) return res.status(400).json({ message: errorMessage });

      const driver = await Driver.findOne({ NIC });

      const details = await Driver.findOne(Driver);
      if (!driver)
        return res.status(400).json({ message: "Not registered NIC" });

      const match = await bcrypt.compare(password, Driver.password);

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
      const { RegiNumber, password } = req.body;
      const errorMessage = loginValid(RegiNumber, password);
      if (errorMessage) return res.status(400).json({ message: errorMessage });

      const PoliceOfficer = await Driver.findOne({ RegiNumber });

      const details = await PoliceOfficer.findOne(PoliceOfficer);
      if (!customer)
        return res.status(400).json({ message: "Not registered NIC" });

      const match = await bcrypt.compare(password, PoliceOfficer.password);

      console.log(match);
      if (!match) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const token = jwt.sign({ _id: PoliceOfficer._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      PoliceOfficer.password = undefined;

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
