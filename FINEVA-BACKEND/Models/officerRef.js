const mongoose = require("mongoose");
const OfficerRefSchema=new mongoose.Schema(
    {
        RegNumber:{
            type:String,
            required:true
        },
        station:{
            type:String,
            required:true
        },
        stationEmail:{
            type:String,
            required:true,
        }

    }
)
const OfficerRef = mongoose.model("DriverRef",DriverRefSchema);
module.exports = OfficerRef;