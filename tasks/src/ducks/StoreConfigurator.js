import tasks from './modules/tasks'

export default class StoreConfigurator {
  constructor(createStore, combineReducers, applyMiddleware, thunk) {
    this.createStore = createStore || require('redux').createStore
    this.combineReducers = combineReducers || require('redux').combineReducers
    this.applyMiddleware = applyMiddleware || require('redux').applyMiddleware
    this.thunk = thunk || require('redux-thunk').default
  }

  configure(initialState) {
    const rootReducer = this._buildReducer()
    return this.createStore(
      rootReducer,
      initialState,
      this.applyMiddleware(this.thunk)
    )
  }

  _buildReducer() {
    return this.combineReducers({
      tasks
    })
  }
}
