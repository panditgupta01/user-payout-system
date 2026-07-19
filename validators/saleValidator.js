const Joi = require("joi");

exports.saleSchema = Joi.object({

    userId: Joi.string().required(),

    brand: Joi.string().trim().required(),

    earning: Joi.number().positive().required()

});