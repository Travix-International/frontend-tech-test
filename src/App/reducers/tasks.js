import {
  Task_Add_Request,
  Task_Add_Success,
  Task_Add_Failure,

  Task_Edit_Request,
  Task_Edit_Success,
  Task_Edit_Failure,

  Task_Remove_Request,
  Task_Remove_Success,
  Task_Remove_Failure,

  Task_Editable,
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
  console.log('Run Reducer with state = '+ state +' and action = '+ action);
  
  switch(action.type) {
    case Task_Add_Request:
      return {
        tasks: [
          ...state.tasks,
            {
              content: action.payload.content,
              done: false,
              editable: false,
              loading: false // when we make it async it will be true
            }
          ]
        }
    
    case Task_Add_Success:
      return state;
    
    case Task_Add_Failure:
      return state;
    
    case Task_Edit_Request:
      state.tasks.forEach(function(task, id){
        if(action.payload.id === id) {
          state.tasks[id].content = action.payload.content;
          state.tasks[id].editable = false;
        }
      })

      return {
        tasks: [...state.tasks]
      }
      
    case Task_Edit_Success:
      return state.tasks.map(function(task, id){
        if(id === action.id) {
          task.loading = false;
        }

        return task;
      })

    case Task_Edit_Failure:
      return state.tasks.map(function(task, id){
        if(id === action.payload.id) {
          task.loading = false;
        }

        return task;
      })
    
    case Task_Remove_Request:
      state.tasks.splice(action.payload.id, 1);
      
      return {
        tasks: [...state.tasks]
      }

    case Task_Remove_Success:
      return state.tasks.slice(action.id, 1);

    case Task_Remove_Failure:
      return state.tasks.map(function(task, id){
        if(id === action.id) {
          task.loading = false;
        }
        
        return task;
      })

    case Task_Editable:
      state.tasks.forEach(function(task, id){
        if(action.payload.id === id) {
          state.tasks[id].editable = true;
        }
      })

      return {
        tasks: [...state.tasks]
      }
    default:
      return state;

  }
}

