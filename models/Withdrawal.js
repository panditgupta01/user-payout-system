const mongoose = require("mongoose");

const withdrawalSchema = new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    amount:{
        type:Number,
        required:true,
        min:1
    },

    status:{
        type:String,
        enum:[
            "pending",
            "success",
            "failed",
            "cancelled",
            "rejected"
        ],
        default:"pending"
    }

},{
    timestamps:true
});


module.exports = mongoose.model("Withdrawal", withdrawalSchema);