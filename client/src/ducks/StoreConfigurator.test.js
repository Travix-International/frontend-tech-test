import tasks from './modules/tasks'

import StoreConfigurator from './StoreConfigurator'

describe('StoreConfigurator', () => {
  it('should configure redux store', () => {
    const initialState = undefined
    const createStore = jest.fn()
    const thunk = jest.fn()
    const combineReducers = jest.fn().mockReturnValue('combinedReducer')
    const applyMiddleware = jest.fn().mockReturnValue('applyMiddleware')
    const configurator = new StoreConfigurator(
      createStore, combineReducers, applyMiddleware, thunk
    )

    configurator.configure(initialState)

    expect(createStore).toBeCalledWith(
      'combinedReducer', initialState, 'applyMiddleware'
    )
    expect(applyMiddleware).toBeCalledWith(thunk)
    expect(combineReducers).toBeCalledWith({
      tasks
    })
  })
})
