import {
  Task_Edit_Request,
  Task_Edit_Success,
  Task_Edit_Failure,

  Task_Remove_Request,
  Task_Remove_Success,
  Task_Remove_Failure,
} from '../actions/actions'

const initState = {
  tasks: [{
    content: 'First task',
    done: false,
    editable: false,
    loading: false,
  },{
    content: 'Second task',
    done: false,
    editable: false,
    loading: false,
  },{
    content: 'Third task',
    done: false,
    editable: false,
    loading: false,
  }],  
}

export default function tasks(state= initState, action) {
  switch(action.type) {
    case Task_Edit_Request:
      return state.tasks.map(function(task, id){
        if(id === action.id) {
          task.loading = true;
        }

        return task;
      })

    case Task_Edit_Success:
      return state.tasks.map(function(task, id){
        if(id === action.id) {
          task.loading = false;
        }

        return task;
      })

    case Task_Edit_Failure:
      return state.tasks.map(function(task, id){
        if(id === action.id) {
          task.loading = false;
        }

        return task;
      })
    
    case Task_Remove_Request:
      return state.tasks.map(function(task, id){
        if(id === action.id) {
          task.loading = true;
        }

        return task;
      })

    case Task_Remove_Success:
      return state.tasks.slice(action.id, 1);

    case Task_Remove_Failure:
      return state.tasks.map(function(task, id){
        if(id === action.id) {
          task.loading = false;
        }
        
        return task;
      })

    default:
      return state;

  }
}

