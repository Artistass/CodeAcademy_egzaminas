import joi from "joi";

const userSchema = joi.object({
  name: joi.string()
    .alphanum()
    .min(2)
    .max(20)
    .required(),

  password: joi.string()
    .alphanum()
    .min(8)
    .required()
});

export function validateSignUpBody(req, res, next) {
  const { error } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  };
  next();
};