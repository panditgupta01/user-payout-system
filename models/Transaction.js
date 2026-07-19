const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    saleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sale"
    },

    type: {
        type: String,
        enum: [
            "ADVANCE",
            "FINAL_PAYOUT",
            "SALE_ADJUSTMENT",
            "WITHDRAWAL",
            "WITHDRAWAL_REFUND"
        ],
        required: true
    },

    amount: {
        type: Number,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Transaction", transactionSchema);