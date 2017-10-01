import tasksReducer, {
  fetchTasks, updateTask, createTask, deleteTask, initialState
} from './tasks'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Tasks Ducks', () => {
  describe('Reducer', () => {
    it('should return initial state', () => {
      const state = tasksReducer(initialState, {})

      expect(state).toEqual(initialState)
    })

    it('should add payload items to state', () => {
      const action = {
        type: 'TASKS_FETCH_ITEMS',
        payload: [
          { id: 1, title: 'Something...', description: 'Description 1'},
          { id: 2, title: 'Other...', description: 'Description 2' },
          { id: 3, title: 'Another...', description: 'Description 3' }
        ]
      }
      const state = tasksReducer(initialState, action)

      expect(state).toEqual({
        items: [
          { id: 1, title: 'Something...', description: 'Description 1'},
          { id: 2, title: 'Other...', description: 'Description 2' },
          { id: 3, title: 'Another...', description: 'Description 3' }
        ]
      })
    })

    it('should update a task of state items based on payload id', () => {
      const payload = {
        id: 1,
        title: 'Updated...',
        description: 'Updated Description 1'
      }
      const initialState = {
        items: [
          { id: 1, title: 'Something...', description: 'Description 1'},
          { id: 2, title: 'Other...', description: 'Description 2' },
          { id: 3, title: 'Another...', description: 'Description 3' }
        ]
      }
      const action = {
        type: 'TASKS_UPDATE_ITEM',
        payload: payload
      }
      const state = tasksReducer(initialState, action)

      expect(state).toEqual({
        items: [
          { id: 1, title: 'Updated...', description: 'Updated Description 1'},
          { id: 2, title: 'Other...', description: 'Description 2' },
          { id: 3, title: 'Another...', description: 'Description 3' }
        ]
      })
    })

    it('should create a task and append on state items', () => {
      const payload = {
        title: 'New task...',
        description: 'Description 4'
      }
      const initialState = {
        items: [
          { id: 0, title: 'Something...', description: 'Description 1'},
          { id: 1, title: 'Other...', description: 'Description 2' },
          { id: 2, title: 'Another...', description: 'Description 3' }
        ]
      }
      const action = {
        type: 'TASKS_CREATE_ITEM',
        payload: payload
      }
      const state = tasksReducer(initialState, action)

      expect(state).toEqual({
        items: [
          { id: 0, title: 'Something...', description: 'Description 1'},
          { id: 1, title: 'Other...', description: 'Description 2' },
          { id: 2, title: 'Another...', description: 'Description 3' },
          { id: 3, title: 'New task...', description: 'Description 4' }
        ]
      })
    })

    it('should delete a task on state items', () => {
      const payload = {
        id: 2
      }
      const initialState = {
        items: [
          { id: 1, title: 'Something...', description: 'Description 1'},
          { id: 2, title: 'Other...', description: 'Description 2' },
          { id: 3, title: 'Another...', description: 'Description 3' }
        ]
      }
      const action = {
        type: 'TASKS_DELETE_ITEM',
        payload: payload
      }
      const state = tasksReducer(initialState, action)

      expect(state).toEqual({
        items: [
          { id: 1, title: 'Something...', description: 'Description 1'},
          { id: 3, title: 'Another...', description: 'Description 3' }
        ]
      })
    })
  })

  describe('Action Creators', () => {
    it('should build a TASKS_FETCH_ITEMS action', (done) => {
      const store = mockStore({ tasks: {} })
      class Fetcher {
        fetch() {
          return Promise.resolve({
            tasks: [
              { id: 1, title: 'Something...', description: 'Description 1'},
              { id: 2, title: 'Other...', description: 'Description 2' },
              { id: 3, title: 'Another...', description: 'Description 3' }
            ]
          })
        }
      }

      return store.dispatch(fetchTasks(Fetcher))
        .then(() => {
          expect(store.getActions()).toEqual([{
            type: 'TASKS_FETCH_ITEMS',
            payload: [
              { id: 1, title: 'Something...', description: 'Description 1'},
              { id: 2, title: 'Other...', description: 'Description 2' },
              { id: 3, title: 'Another...', description: 'Description 3' }
            ]
          }])
          done()
        })
    })

    it('should build a TASKS_UPDATE_ITEM action', () => {
      const payload = {
        id: 1,
        title: 'A title',
        description: 'A description'
      }
      const action = updateTask(payload)

      expect(action).toEqual({
        type: 'TASKS_UPDATE_ITEM',
        payload: payload
      })
    })

    it('should build a TASKS_CREATE_ITEM action', (done) => {
      const payload = {
        title: 'New task',
        description: 'New task description'
      }

      const store = mockStore({ tasks: {} })
      class Creator {
        create(payload) {
          return Promise.resolve(true)
        }
      }

      return store.dispatch(createTask(payload, Creator))
        .then(() => {
          expect(store.getActions()).toEqual([{
            type: 'TASKS_CREATE_ITEM',
            payload: payload
          }])
          done()
        })
    })

    it('should build a TASKS_DELETE_ITEM action', () => {
      const payload = {
        id: 1
      }
      const action = deleteTask(payload)

      expect(action).toEqual({
        type: 'TASKS_DELETE_ITEM',
        payload: payload
      })
    })
  })
})
