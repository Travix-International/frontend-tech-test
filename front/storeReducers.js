import { createStore, combineReducers } from 'frint-store';

import rootReducer from './reducers'

export default function storeReducers({ app }) {
  const reducer = combineReducers(rootReducer)
  const Store = createStore({ reducer, deps: { app } })

  return new Store()
}
