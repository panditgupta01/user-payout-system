const userService = require("../services/userService");
const asyncHandler = require("../utils/asyncHandler");

exports.createUser = asyncHandler(async (req, res) => {
    const user = await userService.createUser(req.body);

    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: user
    });
});

exports.getUsers = asyncHandler(async (req, res) => {
    const users = await userService.getUsers();

    res.json({
        success: true,
        data: users
    });
});