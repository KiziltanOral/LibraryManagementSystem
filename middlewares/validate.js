const validate = (schema) => {
    return async (req, res, next) => {
      try {
        const data = { ...req.params, ...req.body };
        await schema.validateAsync(data, { abortEarly: false });
        next();
      } catch (error) {
        return res.status(400).json({ message: error.details.map((e) => e.message).join(", ") });
      }
    };
  };
  
  module.exports = validate;
  