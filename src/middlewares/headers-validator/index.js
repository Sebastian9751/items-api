export const validateHeaders = (req, res, next) => {
	const { headers } = req;

	const currentDate = new Date().toISOString();

	if (!headers['x-date']) {
		return res.status(400).json({ error: 'Header x-date is required' });
	}

	if (!headers['x-signature']) {
		return res.status(400).json({ error: 'Header x-signature is required' });
	}

	if (!headers['x-authentication']) {
		return res
			.status(400)
			.json({ error: 'Header x-authentication is required' });
	}

	console.log(headers['x-date']);
	console.log(headers['x-signature']);
	console.log(headers['x-authentication']);
	console.log(currentDate);

	next();
};
