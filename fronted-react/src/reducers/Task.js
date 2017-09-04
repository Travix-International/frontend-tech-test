import Immutable from 'immutable'

import { 
	LOADDED_TASKS
 } from '../actions'

const arrTasks = Immutable.fromJS({
	loadded: false
	, data: []
	})

let defaultState = Immutable.fromJS(arrTasks)

function appReducer (state = defaultState, action) {
  switch ( action.type ) { 
  	case LOADDED_TASKS:
  		return state.merge({
			loadded: true
			, data: action.response.tasks
		})
  		break
	default: 
		return state
	}
}

export default appReducer