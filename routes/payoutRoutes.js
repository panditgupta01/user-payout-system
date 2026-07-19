const express = require("express");

const router = express.Router();

const payoutController = require("../controllers/payoutController");

router.post(
    "/advance",
    payoutController.processAdvancePayout
);

router.patch(
    "/reconcile/:id",
    payoutController.reconcileSale
);

module.exports = router;