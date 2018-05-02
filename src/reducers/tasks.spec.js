import * as types from 'constants/actionTypes'
import { tasksMock } from 'mocks/tasks'
import tasks from './tasks'

describe('Test tasks reducer', () => {
  it('reducer for TASKS_FETCH_COMPLETED', () => {
    let state = {}
    state = tasks(state, { type: types.TASKS_FETCH_COMPLETED, payload: tasksMock.tasks })
    expect(state).toEqual({ items: tasksMock.tasks })
  })
  it('reducer for TASK_POST_COMPLETED', () => {
    let state = { items: tasksMock.tasks }
    state = tasks(state, { type: types.TASK_POST_COMPLETED, payload: tasksMock.tasks[0] })
    expect(state).toEqual({ items: [...tasksMock.tasks, tasksMock.tasks[0]] })
  })
  it('reducer for TASK_UPDATE_COMPLETED', () => {
    let state = { items: tasksMock.tasks }
    const newTask = { ...tasksMock.tasks[0], status: 'Done' }
    state = tasks(state, { type: types.TASK_UPDATE_COMPLETED, payload: newTask })
    const newTasks = tasksMock.tasks.map(x => x).splice(1)
    expect(state).toEqual({ items: [newTask, ...newTasks] })
  })
  it('reducer for TASK_DELETE_COMPLETED', () => {
    let state = { items: tasksMock.tasks }
    const newTasks = tasksMock.tasks.map(x => x).splice(1)
    state = tasks(state, { type: types.TASK_DELETE_COMPLETED, payload: tasksMock.tasks[0] })
    expect(state).toEqual({ items: [...newTasks] })
  })
})
