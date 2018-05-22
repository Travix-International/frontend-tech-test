import {combineReducers} from 'redux'
import {TasksListReducer} from './tasks.reducer'


//One root reducer for the whole app. This is done so that the app will have one single reducer to manage lots of other resources.
// And also communication between the reducers will be easier to maintain.

const rootReducer = combineReducers({
  tasks: TasksListReducer
});

export default rootReducer;