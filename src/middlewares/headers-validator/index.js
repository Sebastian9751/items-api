import crypto from 'crypto';
import { SECRET_KEY } from '../../utils/constants/index.js';

export const validateHeaders = (req, res, next) => {
	const {
		'x-date': DATE,
		'x-signature': SIGNATURE,
		'x-authentication': AUTHENTICATION,
	} = req.headers;
	const CURRENT_URL = req.originalUrl;

	if (!DATE) {
		return res.status(400).json({ error: 'Header x-date is required' });
	}

	if (!SIGNATURE) {
		return res.status(400).json({ error: 'Header x-signature is required' });
	}

	if (!AUTHENTICATION) {
		return res
			.status(400)
			.json({ error: 'Header x-authentication is required' });
	}

	const encryptedData = crypto
		.createHmac('sha256', SECRET_KEY)
		.update(CURRENT_URL + DATE)
		.digest('hex');

		console.log(encryptedData);

	if (SIGNATURE !== encryptedData) {
		return res.status(401).json({ error: 'Invalid signature' });
	}

	next();
};
