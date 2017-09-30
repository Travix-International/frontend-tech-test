import tasks from './modules/tasks'

export default class StoreConfigurator {
  constructor(createStore, combineReducers) {
    this.createStore = createStore || require('redux').createStore
    this.combineReducers = combineReducers || require('redux').combineReducers
  }

  configure(initialState) {
    const rootReducer = this._buildReducer()
    return this.createStore(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  }

  _buildReducer() {
    return this.combineReducers({
      tasks
    })
  }
}
