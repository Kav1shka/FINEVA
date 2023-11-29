const mongoose = require("mongoose");

const FineDetailsSchema=new mongoose.Schema(
    {
        fineDateTime:{
            type:String,
            required:true
        }, 
        natureOfOffence:{
            type:String,
            required:true
        },
        fineAmount:{
            type:String,
            required:true
        },
        vehicleNumber:{
            type:String,
            required:true
        },
        PayStatus:{
            type:Boolean,
        },
        LIN:{
            type:String,
            required:true
        },
        place:{
            type:String,
            required:true
        },
        fineName:{
            type:String,
            required:true
        },
        
    }
)
const FineDetails=mongoose.model("FineDetails",FineDetailsSchema);
module.exports=FineDetails;