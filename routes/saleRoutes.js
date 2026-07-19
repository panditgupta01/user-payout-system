const express = require("express");

const router = express.Router();

const saleController = require("../controllers/saleController");

const validate = require("../middleware/validate");

const { saleSchema } = require("../validators/saleValidator");

router.post(
    "/",
    validate(saleSchema),
    saleController.createSale
);

router.get("/", saleController.getAllSales);

router.get("/:id", saleController.getSaleById);

router.patch("/:id", saleController.updateSale);

module.exports = router;