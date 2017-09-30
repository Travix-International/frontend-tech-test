import tasks from './modules/tasks'

import StoreConfigurator from './StoreConfigurator'

describe('StoreConfigurator', () => {
  it('should configure redux store', () => {
    const initialState = undefined
    const createStore = jest.fn()
    const combineReducers = jest.fn().mockReturnValue('combinedReducer')
    const configurator = new StoreConfigurator(
      createStore, combineReducers
    )

    configurator.configure(initialState)

    expect(createStore).toBeCalledWith('combinedReducer', initialState)
    expect(combineReducers).toBeCalledWith({
      tasks
    })
  })
})
