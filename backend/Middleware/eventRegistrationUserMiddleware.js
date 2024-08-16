import joi from "joi";

const userSchema = joi.object({
  firstName: joi.string()
    .alphanum()
    .min(2)
    .max(20)
    .required(),

  lastName: joi.string()
    .alphanum()
    .min(2)
    .max(20)
    .required(),

  email: joi.string()
    .required(),

  age: joi.number()
    .min(18)
    .max(100)
    .required()
});

export function validateRegistrationBody(req, res, next) {
  const { error } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  };
  next();
};