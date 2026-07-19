const User = require("../models/User");
const Wallet = require("../models/Wallet");

exports.createUser = async (userData) => {

    const user = await User.create({
        name: userData.name,
        email: userData.email
    });

    await Wallet.create({
        userId: user._id,
        withdrawableBalance: 0
    });

    return user;

};


exports.getUsers = async () => {

    return await User.find();

};