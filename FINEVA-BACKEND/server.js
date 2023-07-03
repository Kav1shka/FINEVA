const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const dotenv = require("dotenv");
dotenv.config();

const app = express();
mongoose.set("strictQuery", false);

const PORT = process.env.PORT || 8001;
app.use(cors());

app.use(bodyParser.json());

const url ="mongodb+srv://Kav1shka:kavishka123@cluster0.6fyga0b.mongodb.net/";

mongoose.connect(url, (err) => {
  if (err) throw err;
  console.log("MongoDB is connected...");
});

// app.use("/users", users)

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
