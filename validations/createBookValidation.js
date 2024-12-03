const Joi = require('joi');

const createBookSchema  = Joi.object({
    name: Joi.string()
    .min(2)
    .required()
    .messages({
        "string.base": "Name should be a string",
        "string.empty": "Name cannot be empty",
        "string.min": "Name must be at least 2 characters long",
        "any.required": "Name is required"
    }),
});

module.exports = createBookSchema ;