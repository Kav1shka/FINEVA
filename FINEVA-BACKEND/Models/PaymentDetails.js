const mongoose = require("mongoose");

const FineDetailsSchema=new mongoose.Schema(
    {
        FineDate:{
            type:String,
            required:true
        }, 
        FineDesc:{
            type:String,
            required:true
        },
        FineAmount:{
            type:String,
            required:true
        },
        VehicleNum:{
            type:String,
            required:true
        },
        PayStatus:{
            type:String,
            required:true
        },
        NIC:{
            type:String,
            required:true
        }
    }
)
const FineDetails=mongoose.model("FineDetails",FineDetailsSchema);
module.exports=FineDetails;