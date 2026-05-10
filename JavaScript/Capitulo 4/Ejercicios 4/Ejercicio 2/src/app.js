import express from 'express';
import router from './controllers/materias.controller.js';

const app = express();

app.use(express.json());

app.use('/api', router);

export default app;