import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';


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

        // Rutas
        app.use('/', (req, res) => {
            res.send(`¡API!`);
        });

        async function connectDatabase() {
            try {
                await Connection.authenticate();
                console.log('[OK] Conexión establecida con la base de datos');
            } catch (error) {
                console.error(
                    '[ERROR] No se pudo conectar con la base de datos ',
                    error,
                );
            }
        }

        function handleError(err, req, res, next) {
            console.error(err);
            res.status(500).json({ error: 'Error interno del servidor' });
        }

        // Middleware para manejo de errores
        app.use((err, req, res, next) => {
            console.error(err);
            res.status(500).send('[ERROR] Ocurrió un error en el servidor');
        });

        async function startServer() {
            await connectDatabase();
            app.use(handleError);
            app.listen(PORT, () => {
                console.log(`[API] se ejecuta en http://localhost:${PORT}`);
            });
        }

        startServer();
    },
};

export default App;
