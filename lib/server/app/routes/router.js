import * as tasks from '../controllers/tasks';

const router = (app) => {
  /* Tasks API */
  app.use('/api/tasks/:id', tasks.helperMiddleware);
  app.get('/api/tasks', tasks.fetch);
  app.post('/api/tasks', tasks.create);
  app.patch('/api/tasks/:id', tasks.update);
  app.put('/api/tasks/:id', tasks.replace);
  app.delete('/api/tasks/:id', tasks.remove);
};

export default router;
