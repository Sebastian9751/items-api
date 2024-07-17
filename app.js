import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

import itemsRoutes from './src/routes/item.routes.js';

import { Connection } from './src/database/index.js';

dotenv.config();

const App = {
	main: async () => {
		const app = express();
		const PORT = process.env.PORT || 3000;

		// Middlewares
		app.use(cors());
		app.use(express.json());
		app.use(morgan('dev'));

		// Routes
		app.use('/item', itemsRoutes);

		app.use('/', (req, res) => {
			res.status(400).json({ error: 'request not found' });
		});

		async function connectDatabase() {
			try {
				await Connection.authenticate();

				await Connection.sync({ alter: true });

				console.log('[OK] database connection successfully');
			} catch (error) {
				console.error('[ERROR] could not connect to the database ', error);
			}
		}

		function handleError(err, req, res, next) {
			console.error(err);
			res.status(500).json({ error: 'internal server error' });
		}

		app.use((err, req, res, next) => {
			console.error(err);
			res.status(500).send('[ERROR] an error occurred in the server');
		});

		async function startServer() {
			await connectDatabase();
			app.use(handleError);
			app.listen(PORT, () => {
				console.log(`[API] server on http://localhost:${PORT}`);
			});
		}

		startServer();
	},
};

export default App;
