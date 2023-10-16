const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "any.required": "missing required Name field",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "missing required email field",
  }),
  phone: Joi.string().min(3).max(30).required().messages({
    "any.required": "missing required phone field",
  }),
  favorite: Joi.boolean(),
});

const updateSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email(),
  phone: Joi.string().min(3).max(30),
}).or("name", "email", "phone");

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    "any.required": "Missing field favorite",
  }),
});

module.exports = { addSchema, updateSchema, updateFavoriteSchema };