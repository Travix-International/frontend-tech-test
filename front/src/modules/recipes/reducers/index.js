import { combineReducers } from 'redux'
import recipes from './recipes'
import recipe from './recipe'

const rootReducer = combineReducers({
  recipes,
  recipe
})

export default rootReducer
