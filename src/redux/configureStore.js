import { createStore } from 'redux'
import { Map } from 'immutable'

import rootReducer from './ducks/reducer'

const initialState = Map()

const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

  return store
}

export default configureStore
