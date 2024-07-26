export const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'ITEMS-API',
			version: '1.0.0',
			description: 'Items api',
		},
		servers: [
			{
				url: 'http://localhost:3000',
			},
			{
				url: 'https://yourdomain:3000/',
			},
		],
	},
	apis: ['./src/routes/*.js'],
};
