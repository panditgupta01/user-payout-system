const Joi = require("joi");

exports.withdrawalSchema = Joi.object({

    userId: Joi.string().required(),

    amount: Joi.number().positive().required()

});