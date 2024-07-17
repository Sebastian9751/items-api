import { validationResult } from 'express-validator';

export const validateSchema = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		const uniqueErrorMessages = errors.array().map(error => error.msg);
		const uniqueErrors = [...new Set(uniqueErrorMessages)];

		return res.status(400).json({
			status: 'Error de validación',
			errors: uniqueErrors,
		});
	}
	next();
};
