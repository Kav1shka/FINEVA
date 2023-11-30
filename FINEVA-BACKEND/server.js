const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
mongoose.set("strictQuery", false);

const PORT = process.env.PORT || 8000 ;
app.use(cors());

app.use(bodyParser.json());

const url ="mongodb+srv://Kav1shka:kavishka123@cluster0.6fyga0b.mongodb.net/";

mongoose.connect(url, (err) => {
  if (err) throw err;
  console.log("MongoDB is connected...");
});

const AuthRouter = require("./Routes/AuthRoute");
app.use("/User", AuthRouter);

const PaymentRouter=require("./Routes/PaymentRoute");
app.use("/payment",PaymentRouter);

const PoliceRouter = require ("./Routes/PoliceRoute");
app.use("/Police", PoliceRouter);

const DriverRouter = require("./Routes/DriverRoute");
app.use("/Driver", DriverRouter);

const FineRouter = require ("./Routes/FineRoute");
app.use("/Fine", FineRouter);

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});