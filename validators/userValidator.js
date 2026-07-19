const Joi = require("joi");

exports.userSchema = Joi.object({
    name: Joi.string().trim().min(3).max(50).required(),

    email: Joi.string().email().required()
});