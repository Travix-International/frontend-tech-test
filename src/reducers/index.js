import * as Constants from '../constants';


const todos = (state = { tasks:[] }, action) => {
    const { type } = action;
    switch (type) {
    case Constants.LIST_TODOS:
      return {
        tasks: state.tasks.concat(action.tasks)
      };
    case Constants.EMPTY_TODO:
      return {
        tasks: [
            {
              id: Math.random() * 999,
              title:"",
              description:"",
              isEditable: true,
              isNew: true
            },
            ...state.tasks
        ]
      }
    case Constants.DELETE_TODO_LOCALLY:
      return {tasks:state.tasks.filter(todo => todo.id !== action.id)};
    case Constants.ADDED_SUCCESSFULLY:
      return {tasks:state.tasks.filter(todo => todo.id !== action.id)};
    case Constants.SOCKET_MESSAGE:
      const msg = action.msg;
      const updatedTask = msg.data;
      let tasks = state.tasks;
      if(msg.action === "update"){
       return {tasks: tasks.map(
          (el)=> el.id === updatedTask.id ? Object.assign({}, updatedTask, {}) : el
        )}
      }else if (msg.action === "delete"){
        return {tasks:tasks.filter(item => item.id !== updatedTask)};
      }else if (msg.action === "create"){
        return {tasks:[updatedTask,...tasks]};
      }
      break;
    default:
        return state;
    }
};

export default todos;
