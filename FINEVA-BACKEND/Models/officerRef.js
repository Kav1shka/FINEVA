const mongoose = require("mongoose");
const OfficerRefSchema=new mongoose.Schema(
    {
        RegiNumber:{
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
const OfficerRef = mongoose.model("OfficerRef",OfficerRefSchema);
module.exports = OfficerRef;