const Joi = require("joi");

const returnBookValidation = Joi.object({
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
  score: Joi.number().integer().min(1).max(5).required().messages({
    "number.base": "Score must be a number",
    "number.integer": "Score must be an integer",
    "number.min": "Score must be at least 1",
    "number.max": "Score must not exceed 5",
    "any.required": "Score is required",
  }),
});

module.exports = returnBookValidation;
