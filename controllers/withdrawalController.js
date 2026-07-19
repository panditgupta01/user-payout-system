const withdrawalService = require("../services/withdrawalService");
const asyncHandler = require("../utils/asyncHandler");

exports.createWithdrawal = asyncHandler(async (req, res) => {
    const { userId, amount } = req.body;

    const withdrawal = await withdrawalService.createWithdrawal(
        userId,
        amount
    );

    res.status(201).json({
        success: true,
        message: "Withdrawal request created",
        data: withdrawal
    });
});

exports.updateWithdrawalStatus = asyncHandler(async (req, res) => {
    const withdrawal = await withdrawalService.updateWithdrawalStatus(
        req.params.id,
        req.body.status
    );

    res.json({
        success: true,
        message: "Withdrawal status updated",
        data: withdrawal
    });
});