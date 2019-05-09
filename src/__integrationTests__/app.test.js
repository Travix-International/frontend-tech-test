import  mockApi, { newTask, tasks } from '../__mocks__/mockServer';
import configureStore from '../store/configureStore.prod';
import { 
  fetchAllTasks,
  addTaskAction,
  toggleTaskAction,
  editTaskAction,
  deleteTaskAction
} from '../actions/apiActions';

let store;

describe('App integration test', () => {
  beforeEach(() => {
    store = configureStore();
  });

  it('should create new task update the new one in state', async () => {
    await store.dispatch(fetchAllTasks());
    await store.dispatch(addTaskAction('todo', 'todo'));
    const newState = store.getState();
    expect(newState.tasks[newTask.id]).not.toBeUndefined();
    expect(newState.tasks[newTask.id]).toEqual(newTask);
  });

  it('should toggle completed and set updated task in state', async () => {
    await store.dispatch(fetchAllTasks());
    await store.dispatch(toggleTaskAction('t_o4wz8u91m'));
    const newState = store.getState();
    expect(newState.tasks['t_o4wz8u91m'].completed).toBe(true);
  });

  it('should updated task and set updated task in state', async () => {
    await store.dispatch(fetchAllTasks());
    await store.dispatch(editTaskAction('t_lajt1bnt4', 'the updated todo', 'updated'));
    const newState = store.getState();
    expect(newState.tasks['t_lajt1bnt4']).toEqual({
      id: 't_lajt1bnt4',
      title: 'the updated todo', 
      description: 'updated',
      completed: true
    });
  });

  it('should delete the task in state', async () => {
    await store.dispatch(fetchAllTasks());
    await store.dispatch(deleteTaskAction('t_lajt1bnt4'));
    const newState = store.getState();
    expect(newState.tasks['t_lajt1bnt4']).toBeUndefined();
  });
})

