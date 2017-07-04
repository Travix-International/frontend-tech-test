import { find, create, update, remove } from './../models/task';

const taskRoute = (router) => {
  router
    .get('/task', (req, res) => {
      find().then(tasks => {
        res.json(tasks);
      });
    })
    .post('/task', (req, res) => {
      const { title, description, date, completed } = req.body;
      create(title, description, date, completed).then(task => {
        res.json(task);
      });
    })
    .put('/task/:id', (req, res) => {
      const { id } = req.params;
      const { title, description, date, completed } = req.body;
      update(id, title, description, date, completed)
        .then(task => {
          res.json(task);
        });
    })
    .delete('/task/:id', (req, res) => {
      const { id } = req.params;
      remove(id).then(result => {
        res.json(result);
      });
    })
};

export default taskRoute;
