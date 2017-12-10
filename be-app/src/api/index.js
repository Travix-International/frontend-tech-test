import { Router } from 'express';
import taskRouter from './resources/task';

const api = Router();

api.get('/health-check', (req, res) => res.send('OK'));
api.use('/task', taskRouter);

export default api;
