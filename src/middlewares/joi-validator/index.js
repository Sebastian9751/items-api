

export const validateSchema = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    const { details } = error;
    const errorMessages = details.map((err) => err.message).join(', ');
    console.error('Joi Validation Error:', errorMessages);
    return res.status(400).json({
      status: 'Validation Error',
      errors: errorMessages,
    });
  }
  next();
};
