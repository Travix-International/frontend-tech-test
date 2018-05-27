import * as Constants from '../constants';


const todos = (state = { tasks:[] }, action) => {
    const { type, tasks } = action;
    switch (type) {
    case Constants.LIST_TODOS:
      return {
        tasks
      };
    case Constants.EMPTY_TODO:
      return {
        tasks:[
            {
              id: Math.random() * 999,
              title:"",
              description:"",
              isEditable: true,
              isNew: true
            },
            ...tasks,
          ]
      }
    case Constants.DELETED_SUCCESSFULLY:
      return {tasks:state.tasks.filter(todo => todo.id !== action.id)};
    case Constants.DELETE_TODO_LOCALLY:
      return {tasks:state.tasks.filter(todo => todo.id !== action.id)};
    // case Constants.SHOW_TOAST:
    //   return {
    //     tasks:state.tasks,
    //     toastMessage: {
    //       message: toastMessage.message,
    //       messageType: toastMessage.type
    //     }
    //   };
    default:
        return state;
    }
};

export default todos;
