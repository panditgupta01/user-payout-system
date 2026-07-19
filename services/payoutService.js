const Sale = require("../models/Sale");
const Wallet = require("../models/Wallet");
const Transaction = require("../models/Transaction");

exports.processAdvancePayout = async () => {
    const eligibleSales = await Sale.find({ status: "pending", advancePaid: false });

    for (const sale of eligibleSales) {
        const advance = sale.earning * 0.10;

        const wallet = await Wallet.findOne({ userId: sale.userId });
        if (!wallet) {
            throw new Error("Wallet not found for sale user");
        }

        wallet.withdrawableBalance += advance;
        await wallet.save();

        await Transaction.create({
            userId: sale.userId,
            saleId: sale._id,
            type: "ADVANCE",
            amount: advance
        });

        sale.advancePaid = true;
        sale.advanceAmount = advance;
        await sale.save();
    }

    return {
        processedSales: eligibleSales.length
    };
};



exports.reconcileSale = async (id, status) => {
    const sale = await Sale.findById(id);
    if (!sale) {
        throw new Error("Sale not found");
    }

    if (sale.reconciled) {
        throw new Error("Already reconciled");
    }

    if (!["approved", "rejected"].includes(status)) {
        throw new Error("Invalid reconciliation status");
    }

    const wallet = await Wallet.findOne({ userId: sale.userId });
    if (!wallet) {
        throw new Error("Wallet not found for sale user");
    }

    if (status === "approved") {
        const remaining = sale.earning - sale.advanceAmount;

        wallet.withdrawableBalance += remaining;
        await wallet.save();

        await Transaction.create({
            userId: sale.userId,
            saleId: sale._id,
            type: "FINAL_PAYOUT",
            amount: remaining
        });

    } else {
        wallet.withdrawableBalance -= sale.advanceAmount;
        await wallet.save();

        await Transaction.create({
            userId: sale.userId,
            saleId: sale._id,
            type: "SALE_ADJUSTMENT",
            amount: -sale.advanceAmount
        });
    }

    sale.status = status;
    sale.reconciled = true;
    await sale.save();

    return sale;
};