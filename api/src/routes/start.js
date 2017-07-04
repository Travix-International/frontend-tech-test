import express from 'express';
import general from './general';
import task from './task';

const router = express.Router();

general(router);
task(router);

export default router;
