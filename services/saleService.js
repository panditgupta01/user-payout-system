const Sale = require("../models/Sale");

exports.createSale = async (saleData) => {

    const sale = new Sale({
        userId: saleData.userId,
        brand: saleData.brand,
        earning: saleData.earning,

        status: "pending",
        advancePaid: false,
        advanceAmount: 0,
        reconciled: false
    });

    await sale.save();

    return sale;
};

exports.getAllSales = async () => {
    return await Sale.find().populate("userId", "name email");
};


exports.getSaleById = async (id) => {

    const sale = await Sale.findById(id)
        .populate("userId", "name email");

    if (!sale) {
        throw new Error("Sale not found");
    }

    return sale;
};



exports.updateSale = async (id, data) => {
    const sale = await Sale.findById(id);

    if (!sale) {
        const error = new Error("Sale not found");
        error.statusCode = 404;
        throw error;
    }

    sale.brand = data.brand ?? sale.brand;
    sale.earning = data.earning ?? sale.earning;

    await sale.save();

    return sale;
};