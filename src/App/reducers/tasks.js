import {
  Task_Add_Request,
  Task_Add_Success,
  Task_Add_Failure,

  Task_Remove_Request,
  Task_Remove_Success,
  Task_Remove_Failure,

  Tasks_Get_Request,
  Tasks_Get_Success,
  Tasks_Get_Failure,
} from '../actions/actions'

const initState = []

export default function tasks(state= initState, action) {
  
  switch(action.type) {
    
    case Tasks_Get_Request:
      return state;

    case Tasks_Get_Success:
      return [...action.payload.tasks]

    case Tasks_Get_Failure:
      return state;

    case Task_Add_Request:
      return [...state]
    
    case Task_Add_Success:
      return [
          ...state,
            {
              id: action.payload.task.id,
              title: action.payload.task.title,
              description: action.payload.task.description,
            }
          ]
    
    case Task_Add_Failure:
      return state;

    case Task_Remove_Request:      
      return [...state]

    case Task_Remove_Success:
      return state.filter(({ id }) => id !== action.payload.id)

    case Task_Remove_Failure:
      return [...state]

    default:
      return state;

  }
}

