const mongoose = require("mongoose");

const PoliceOfficerSchema=new mongoose.Schema(
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
        RegiNumber:{
            type:String,
            required:true
        }
    }
)

const PoliceOfficer=mongoose.model("PoliceOfficer",PoliceOfficerSchema);
module.exports=PoliceOfficer;