const saleService = require("../services/saleService");
const asyncHandler = require("../utils/asyncHandler");

exports.createSale = asyncHandler(async (req, res) => {
    const sale = await saleService.createSale(req.body);

    res.status(201).json({
        success: true,
        message: "Sale created successfully",
        data: sale
    });
});

exports.getAllSales = asyncHandler(async (req, res) => {
    const sales = await saleService.getAllSales();

    res.json({
        success: true,
        data: sales
    });
});

exports.getSaleById = asyncHandler(async (req, res) => {
    const sale = await saleService.getSaleById(req.params.id);

    res.json({
        success: true,
        data: sale
    });
});

exports.updateSale = asyncHandler(async (req, res) => {
    const sale = await saleService.updateSale(
        req.params.id,
        req.body
    );

    res.json({
        success: true,
        data: sale
    });
});