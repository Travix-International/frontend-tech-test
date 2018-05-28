const request = require('supertest');
const app = require('./server');


describe('Test the root path', () => {

    it('should fetch tasks', async () => {
      const response = await request(app).get('/tasks/20/0');
      expect(response.statusCode).toBe(200);
    });

    it('It should update item', async () => {
      const tasks = (await request(app).get('/tasks/20/0')).body.tasks;
      if(tasks.length > 0){
          const newTitle = "new title";
          const task = tasks[0];
          const params = task.id + "/"+ newTitle +"/new description/false";
          const response = await request(app).put('/task/update/' + params);
          expect(response.statusCode).toBe(200);

          const getResponse = await request(app).get('/task/'+ task.id);
          expect(getResponse.statusCode).toBe(200);
          const newTask = getResponse.body.task;
          expect(newTask.title).toEqual(newTitle);
      }
    });

});
