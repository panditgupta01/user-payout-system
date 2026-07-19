const express = require("express");

const router = express.Router();

const withdrawalController = require("../controllers/withdrawalController");

const validate = require("../middleware/validate");

const { withdrawalSchema } = require("../validators/withdrawalValidator");

router.post(
    "/",
    validate(withdrawalSchema),
    withdrawalController.createWithdrawal
);


router.patch(
    "/:id/status",
    withdrawalController.updateWithdrawalStatus
);

module.exports = router;