const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

const validate = require("../middleware/validate");

const { userSchema } = require("../validators/userValidator");

router.post(
    "/",
    validate(userSchema),
    userController.createUser
);

router.get("/", userController.getUsers);

module.exports = router;