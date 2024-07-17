import Joi from 'joi';


export const createItemSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Name is required',
    'string.base': 'Name must be a string',
  }),
  price: Joi.number().required().messages({
    'any.required': 'Price is required',
    'number.base': 'Price must be a number',
  }),
});


export const updateItemSchema = Joi.object({

  name: Joi.string().required().messages({
    'any.required': 'Name is required',
    'string.base': 'Name must be a string',
  }),
  price: Joi.number().required().messages({
    'any.required': 'Price is required',
    'number.base': 'Price must be a number',
  }),
});


