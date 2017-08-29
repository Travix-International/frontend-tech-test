import {
  Task_Edit_Request,
  Task_Edit_Success,
  Task_Edit_Failure,

  Task_Get_Request,
  Task_Get_Success,
  Task_Get_Failure,
} from '../actions/actions'

const initState = {
  id: null,
  loading: false,
  title: '',
  description: '',
}

export default function tasks(state= initState, action) {
  
  switch(action.type) {
    case Task_Get_Request:
      return {
        ...state,
        loading: true,
      }
    
    case Task_Get_Success:
      return {
        ...action.payload.task,
        loading: false
      }
    
    case Task_Get_Failure:
      return {
        loading: false,
        error: 'Couldn\'t update your task' 
      }
    
    case Task_Edit_Request:
      return {
        ...state,
        loading: true,
      }
      
    case Task_Edit_Success:
      return {
        ...action.payload.task,
        loading: false
      }

    case Task_Edit_Failure:
      return {
        error: 'Couldn\'t delete the task',
        loading: false,
      }

    default:
      return state;
  }
}

