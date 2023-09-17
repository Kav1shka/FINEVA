const mongoose = require("mongoose");
const DriverRefSchema=new mongoose.Schema(
    {
        NIC:{
            type:String,
            required:true
        },
        LIN:{
            type:String,
            required:true
        },

    }
)
const DriverRef=mongoose.model("DriverRef",DriverRefSchema);
module.exports=DriverRef;