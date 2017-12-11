import configureMockStore from 'redux-mock-store'
import ReduxPromise from 'redux-promise';
import * as actions from './Tasks'
import fetchMock from 'fetch-mock'

const middlewares = [ReduxPromise]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates CREATE_TASK when creating task', () => {
    fetchMock
      .once('/task/create/title', {
        body: { tasks: ['task'] },
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      }, { method: 'POST' })

    const expectedActions = [
      { type: actions.CREATE_TASK, payload: { tasks: ['task'] } }
    ]
    const store = mockStore({ tasks: [] })
    const dispatch = new Promise ((resolve) => resolve(actions.createTask([], 'title')))
    return store.dispatch(dispatch).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates GET_TASK when fetching tasks', () => {
    fetchMock
      .once('/tasks', {
        body: { tasks: ['task'] },
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      }, { method: 'GET' })

    const expectedActions = [
      { type: actions.FETCH_TASKS, payload: { tasks: ['task'] } }
    ]
    const store = mockStore({ tasks: [] })
    const dispatch = new Promise ((resolve) => resolve(actions.fetchTasks()))
    return store.dispatch(dispatch).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates DELETE_TASK when fetching tasks', () => {
    const expectedAction = {
      type: actions.DELETE_TASK,
      payload: ['task']
    }
    expect(actions.deleteTask(['task'], 1)).toEqual(expectedAction)
  })

  it('creates TOOGLE_TASK when fetching tasks', () => {
    const expectedAction = {
      type: actions.TOGGLE_TASK,
      payload: ['task']
    }
    expect(actions.toggleTask(['task'], 1)).toEqual(expectedAction)
  })

  it('creates UPDATE_TASK when fetching tasks', () => {
    const expectedAction = {
      type: actions.UPDATE_TASK,
      payload: ['task']
    }
    expect(actions.updateTask(['task'], { title: 'title' })).toEqual(expectedAction)
  })
})
