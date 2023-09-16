const mongoose = require("mongoose");
const DriverRefSchema=new mongoose.Schema(
    {
        NIC:{
            type:String,
            required:true
        },
        Province:{
            type:String,
            required:true
        },
        District:{
            type:String,
            required:true
        }
    }
)
const DriverRef=mongoose.model("DriverRef",DriverRefSchema);
module.exports=DriverRef;