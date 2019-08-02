import Task from './Task';

describe('Task', () => {
  let task;
  let createdTask;
  const taskObject = {
    title: `Title ${Math.random()}`,
    description: `Description ${Math.random()}`
  };

  beforeAll(async () => {
    task = new Task();
    await task.createTask(taskObject.title, taskObject.description);
    const taskResponse = await task.getTasks();
    createdTask = taskResponse.data.tasks.find(
      thisTask => thisTask.title === taskObject.title && thisTask.description === taskObject.description
    );
  });

  it('Test createTask()', async () => {
    const response = await task.createTask(taskObject.title, taskObject.description);
    expect(response.status).toBe(201);
    expect(response.data.message).toBe('Resource created');
  });

  it('Test getTask()', async () => {
    const response = await task.getTask(createdTask.id);
    expect(response.status).toBe(200);
    expect(response.data.task).toMatchObject({
      id: expect.any(Number),
      title: expect.anything(),
      description: expect.anything()
    });
  });

  it('Test getTask() not integer id', async () => {
    const response = await task.getTask('siamak');
    expect(response.status).toBe(400);
    expect(response.data.message).toBe('Bad request.');
  });

  it('Test getTask() not found id', async () => {
    const response = await task.getTask(10000000);
    expect(response.status).toBe(404);
    expect(response.data.message).toBe('Not found.');
  });

  it('Test createTask()', async () => {
    const response = await task.createTask('Title', 'Description');
    expect(response.status).toBe(201);
    expect(response.data.message).toBe('Resource created');
  });

  it('Test delete() not found id', async () => {
    const response = await task.deleteTask(10000000);
    expect(response.status).toBe(404);
    expect(response.data.message).toBe('Not found');
  });

  it('Test delete() not integer id', async () => {
    const response = await task.deleteTask('siamak');
    expect(response.status).toBe(400);
    expect(response.data.message).toBe('Bad request');
  });

  it('Test delete()', async () => {
    const response = await task.deleteTask(createdTask.id);
    expect(response.status).toBe(200);
    expect(response.data.message).toBe('Deleted successfully');
  });
});
