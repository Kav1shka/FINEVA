const mongoose = require("mongoose");
const DriverSchema=new mongoose.Schema(
    {
        Email:{
            type:String,
            required:true
        },
        Fname:{
            type:String,
            required:true
        },
        Lname:{
            type:String,
            required:true
        },
        Password:{
            type:String,
            required:false
        },
        Contact:{
            type:String,
            required:false
        },
        NIC:{
            type:String,
            required:true
        },
        LIN:{
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
const Driver=mongoose.model("Driver",DriverSchema);
module.exports=Driver;