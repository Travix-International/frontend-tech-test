/* eslint-env mocha, chai, sinon */
import { assert } from 'chai';
import sinon from 'sinon';
import TasksServer from './TasksServer';

sinon.assert.expose(assert, { prefix: '' });

const fakeTasks = {
  "tasks": [
    { "id": 0, "title": "make components", "description": "" },
    { "id": 1, "title": "design actions", "description": "" },
    { "id": 2, "title": "implement reducer", "description": "" },
    { "id": 4, "title": "connect components", "description": "" },
    { "id": 3, "title": "Test components", "description": "" }
  ]
};

suite('On the task server library', () => {
  let tasksServerTest;
  setup(() => {
    tasksServerTest = new TasksServer();
    tasksServerTest.tasks = [];
    //
  });
  teardown(() => {
    tasksServerTest = null;
  });
  test('The constructor calls to orderTasks', () => {
    sinon.stub(tasksServerTest, 'orderTasks');
    tasksServerTest.loadJSON(fakeTasks);
    assert.calledOnce(tasksServerTest.orderTasks.withArgs(fakeTasks.tasks));
    // tasksServerTest.getAll();
  });
  test('orderTask orders the tasks by id on descending mode', () => {
    const orderedTasks = {
      "tasks": [
        { "id": 0, "title": "make components", "description": "" },
        { "id": 1, "title": "design actions", "description": "" },
        { "id": 2, "title": "implement reducer", "description": "" },
        { "id": 3, "title": "Test components", "description": "" },
        { "id": 4, "title": "connect components", "description": "" }
      ]
    };

    const result = tasksServerTest.orderTasks(fakeTasks.tasks);
    assert.deepEqual(result, orderedTasks.tasks);
  });
  test('given the ordered task collection the method getTasksNextID returns the highest id plus one', () => {
    tasksServerTest.tasks = [
      { "id": 0, "title": "make components", "description": "" },
      { "id": 1, "title": "design actions", "description": "" },
    ];
    const result = tasksServerTest.getTasksNextID();
    assert.equal(result, 2);
  });
  test('given a string ID the method parseId returns a number', () => {
    const result = tasksServerTest.parseId('5');
    assert.equal(result, 5);
  });
  test('given a string ID the method idIsValid returns true', () => {
    const result = tasksServerTest.idIsValid('5');
    assert.isTrue(result);
  });
  test('given a giberish string ID the method idIsValid returns false', () => {
    const result = tasksServerTest.idIsValid('asdasd');
    assert.isFalse(result);
  });
  test('the method getAll returns the ordered list of items inside an object', () => {
    tasksServerTest.tasks = [
      { "id": 0, "title": "make components", "description": "" },
      { "id": 1, "title": "design actions", "description": "" },
    ];
    const result = tasksServerTest.getAll();
    assert.deepEqual(result, { tasks: tasksServerTest.tasks });
  });
  test('given a correct ID the method find returns a task object', () => {
    const testTask = { "id": 0, "title": "make components", "description": "" };
    tasksServerTest.tasks = [
      testTask
    ];
    const result = tasksServerTest.find(0);
    assert.deepEqual(result, testTask);
  });
  test('given an incorrect ID the method find returns null', () => {
    const testTask = { "id": 0, "title": "make components", "description": "" };
    tasksServerTest.tasks = [
      testTask
    ];
    const result = tasksServerTest.find(1);
    assert.equal(result, null);
  });
  test('given a correct ID the method findIndex returns a task index', () => {
    const testTask = { "id": 0, "title": "make components", "description": "" };
    tasksServerTest.tasks = [
      testTask
    ];
    const result = tasksServerTest.findIndex(0);
    assert.deepEqual(result, 0);
  });
  test('given an incorrect ID the method findIndex returns -1', () => {
    const testTask = { "id": 0, "title": "make components", "description": "" };
    tasksServerTest.tasks = [
      testTask
    ];
    const result = tasksServerTest.findIndex(1);
    assert.equal(result, -1);
  });

  test('given an title and a description the method add increases the number of tasks by one', () => {
    const testTask = { "id": 0, "title": "make components", "description": "" };
    tasksServerTest.tasks = [
      testTask
    ];
    sinon.stub(tasksServerTest, 'getTasksNextID').returns(1);
    const result = tasksServerTest.add('foo', 'bar');
    assert.deepEqual(result, {
      id: 1,
      title: 'foo',
      description: 'bar'
    });
    assert.lengthOf(tasksServerTest.tasks, 2);
    assert.calledOnce(tasksServerTest.getTasksNextID);
  });
  test('given an index the method delete reduces the number of tasks by one', () => {
    const testTask = { "id": 0, "title": "make components", "description": "" };
    tasksServerTest.tasks = [
      testTask
    ];

    const result = tasksServerTest.delete(0);
    assert.lengthOf(tasksServerTest.tasks, 0);
  });
  test('given a task the method update changes his properties title and description', () => {
    const testTask = { "id": 0, "title": "make components", "description": "" };
    tasksServerTest.tasks = [
      testTask
    ];

    const result = tasksServerTest.update(testTask, 'foo', 'bar');
    assert.equal(result.title, 'foo');
    assert.equal(result.description, 'bar');
  });
});