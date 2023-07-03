const mongoose = require("mongoose");

const DriverSchema=new mongoose.Schema(
    {
        email:{
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
            required:true
        },
        Contact:{
            type:String,
            required:true
        },
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

const Driver=mongoose.model("Driver",DriverSchema);
module.exports=Driver;