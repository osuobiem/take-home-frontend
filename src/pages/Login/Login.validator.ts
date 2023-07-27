import Joi from "joi";

const schema = Joi.object({
  email: Joi.string().email({tlds: false}).label("Email address"),
  password: Joi.string().label("Password"),
});

export const validate = (data: {email: string; password: string}) =>
  schema.validate(data);
