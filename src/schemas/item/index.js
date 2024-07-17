import { body, param } from 'express-validator';

export const createItemSchema = () => {
	return [
		body('name')
			.notEmpty()
			.withMessage('Name is required')
			.isString()
			.withMessage('Name must be a string'),

		body('price')
			.notEmpty()
			.withMessage('Price is required')
			.isNumeric()
			.withMessage('Price must be a number'),
	];
};

export const updateItemSchema = () => {
	return [
		param('id')
			.notEmpty()
			.withMessage('Item ID is required')
			.isInt()
			.withMessage('Item ID must be an integer'),

		body('name').optional().isString().withMessage('Name must be a string'),

		body('price').optional().isNumeric().withMessage('Price must be a number'),
	];
};
