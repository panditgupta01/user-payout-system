const Withdrawal = require("../models/Withdrawal");
const Wallet = require("../models/Wallet");
const Transaction = require("../models/Transaction");


exports.createWithdrawal = async (userId, amount) => {

    const wallet = await Wallet.findOne({ userId });

    if (!wallet) {
        const error = new Error("Wallet not found");
        error.statusCode = 404;
        throw error;
    }

    if (wallet.withdrawableBalance < amount) {
        const error = new Error("Insufficient balance");
        error.statusCode = 400;
        throw error;
    }

    const lastWithdrawal = await Withdrawal.findOne({ userId })
        .sort({ createdAt: -1 });

    if (lastWithdrawal) {
        const diff = Date.now() - lastWithdrawal.createdAt.getTime();

        if (diff < 24 * 60 * 60 * 1000) {
            throw new Error("Only one withdrawal allowed every 24 hours");
        }
    }

    wallet.withdrawableBalance -= amount;
    await wallet.save();

    const withdrawal = await Withdrawal.create({
        userId,
        amount,
        status: "pending",
    });

    await Transaction.create({
        userId,
        type: "WITHDRAWAL",
        amount: -amount,
    });

    return withdrawal;
};

exports.updateWithdrawalStatus = async (id, status) => {
    const withdrawal = await Withdrawal.findById(id);

    if (!withdrawal) {
        throw new Error("Withdrawal not found");
    }

    if (withdrawal.status !== "pending") {
        throw new Error("Withdrawal has already been processed");
    }

    const validStatuses = ["success", "failed", "cancelled", "rejected"];

    if (!validStatuses.includes(status)) {
        throw new Error("Invalid withdrawal status");
    }

    const wallet = await Wallet.findOne({
        userId: withdrawal.userId,
    });

    if (!wallet) {
        const error = new Error("Wallet not found");
        error.statusCode = 404;
        throw error;
    }

    if (
        status === "failed" ||
        status === "cancelled" ||
        status === "rejected"
    ) {
        wallet.withdrawableBalance += withdrawal.amount;

        await wallet.save();

        await Transaction.create({
            userId: withdrawal.userId,
            type: "WITHDRAWAL_REFUND",
            amount: withdrawal.amount,
        });
    }

    withdrawal.status = status;

    await withdrawal.save();

    return withdrawal;
};