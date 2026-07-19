const payoutService = require("../services/payoutService");
const asyncHandler = require("../utils/asyncHandler");

exports.processAdvancePayout = asyncHandler(async (req, res) => {
    const result = await payoutService.processAdvancePayout();

    res.json({
        success: true,
        message: "Advance payout processed successfully",
        data: result
    });
});

exports.reconcileSale = asyncHandler(async (req, res) => {
    const sale = await payoutService.reconcileSale(
        req.params.id,
        req.body.status
    );

    res.json({
        success: true,
        message: "Sale reconciled successfully",
        data: sale
    });
});