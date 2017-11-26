import { createStore combineReducers } from 'frint-store';

import rootReducer from './reducers'

export default function storeReducers() {
  const reducer = combineReducers(rootReducer)
  return createStore({ reducer })
}
