import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { getFetchMock } from 'test_support'
import {
  loadTasks,
  createTask,
  updateTask,
  deleteTask,
  createSubTask,
  updateSubTask,
  deleteSubTask
} from 'actions'
import * as types from 'constants/actionTypes'
import { crudTaskMock, subTask, taskWithSubtask, tasksMock } from 'mocks/tasks'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('loadTasks action', () => {
  it('creates TASKS_FETCH_COMPLETED if the fetch response was successful', () => {
    window.fetch = getFetchMock(200, tasksMock)

    const expectedActions = [
      { type: types.TASKS_FETCH_STARTED },
      { type: types.TASKS_FETCH_COMPLETED, payload: tasksMock.tasks }
    ]

    const store = mockStore({})

    return store.dispatch(loadTasks()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe('createTask action', () => {
  it('creates TASK_POST_COMPLETED if the fetch response was successful', () => {
    const task = crudTaskMock
    window.fetch = getFetchMock(201, { task })

    const expectedActions = [
      { type: types.TASK_POST_STARTED },
      { type: types.TASK_POST_COMPLETED, payload: task }
    ]

    const store = mockStore({})

    return store.dispatch(createTask(task)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe('updateTask action', () => {
  it('creates TASK_UPDATE_COMPLETED if the fetch response was successful', () => {
    const task = crudTaskMock
    window.fetch = getFetchMock(200, { task })

    const expectedActions = [
      { type: types.TASK_UPDATE_STARTED },
      { type: types.TASK_UPDATE_COMPLETED, payload: task }
    ]

    const store = mockStore({})

    return store.dispatch(updateTask(task)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe('deleteTask action', () => {
  it('creates TASK_DELETE_COMPLETED if the fetch response was successful', () => {
    const task = crudTaskMock
    window.fetch = getFetchMock(200, { task })

    const expectedActions = [
      { type: types.TASK_DELETE_STARTED },
      { type: types.TASK_DELETE_COMPLETED, payload: task }
    ]

    const store = mockStore({})

    return store.dispatch(deleteTask(task)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe('createSubTask action', () => {
  it('creates SUB_TASK_POST_COMPLETED if the fetch response was successful', () => {
    const task = taskWithSubtask
    window.fetch = getFetchMock(200, { task })

    const expectedActions = [
      { type: types.SUB_TASK_POST_STARTED },
      { type: types.SUB_TASK_POST_COMPLETED, payload: task }
    ]

    const store = mockStore({})

    return store.dispatch(createSubTask({ ...subTask, id: subTask.parentId })).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe('updateSubTask action', () => {
  it('creates SUB_TASK_UPDATE_COMPLETED if the fetch response was successful', () => {
    const newSubtask = { ...taskWithSubtask.subTasks[0], status: 'Done' }
    const task = { ...taskWithSubtask, subTasks: [newSubtask] }
    window.fetch = getFetchMock(200, { task })

    const expectedActions = [
      { type: types.SUB_TASK_UPDATE_STARTED },
      { type: types.SUB_TASK_UPDATE_COMPLETED, payload: task }
    ]

    const store = mockStore({})

    return store.dispatch(updateSubTask(newSubtask)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe('deleteSubTask action', () => {
  it('creates SUB_TASK_DELETE_COMPLETED if the fetch response was successful', () => {
    const task = { ...taskWithSubtask, subTasks: [] }
    window.fetch = getFetchMock(200, { task })

    const expectedActions = [
      { type: types.SUB_TASK_DELETE_STARTED },
      { type: types.SUB_TASK_DELETE_COMPLETED, payload: task }
    ]

    const store = mockStore({})

    return store.dispatch(deleteSubTask(subTask)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
