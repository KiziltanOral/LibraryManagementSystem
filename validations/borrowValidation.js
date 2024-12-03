const Joi = require("joi");

const borrowBookValidation = Joi.object({
  userId: Joi.number().integer().positive().required().messages({
    "number.base": "User ID must be a number",
    "number.positive": "User ID must be a positive number",
    "number.integer": "User ID must be an integer",
    "any.required": "User ID is required",
  }),
  bookId: Joi.number().integer().positive().required().messages({
    "number.base": "Book ID must be a number",
    "number.positive": "Book ID must be a positive number",
    "number.integer": "Book ID must be an integer",
    "any.required": "Book ID is required",
  }),
});

module.exports = borrowBookValidation;
