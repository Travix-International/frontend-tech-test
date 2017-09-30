import tasks from './modules/tasks'

export default class StoreConfigurator {
  constructor(createStore, combineReducers) {
    this.createStore = createStore || require('redux').createStore
    this.combineReducers = combineReducers || require('redux').combineReducers
  }

  configure(initialState) {
    const rootReducer = this._buildReducer()
    return this.createStore(rootReducer, initialState)
  }

  _buildReducer() {
    return this.combineReducers({
      tasks
    })
  }
}
