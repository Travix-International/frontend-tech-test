import { 
  SAVE_TASKS_LIST,
  DELETE_TASK, UPDATE_TASK, FETCH_TASK_PENDING, ADD_TASK, REMOVE_LAST_TASK, KEEP_EDIT_MODE
} from './actions';

const initialState = {
  tasksList: [],
  isEditInProcess: false,
  isLoading: false,
  hasMoreTasks: true,
  totalTasks: 0,
  deletedTasks: 0
};


// const saveTaskList = (state, action) => {
//   const { tasksList } = state;
//   const { tasks } = action;
//   const changesForState = {
//     tasksList: [...tasksList, ...tasks],
//     hasMoreTasks: !!tasks.length
//   };
//   return {
//     ...state,
//     ...changesForState
//   };
// };

const saveTaskList = (state, action) => {
  const { tasksList } = state;
  const { tasks, totalTasks } = action;
  const fetchedTasksLength = tasksList.length;
  const hasMoreTasks = !!tasks.length && fetchedTasksLength <= totalTasks
  const changesForState = {
    tasksList: [...tasksList, ...tasks],
    hasMoreTasks: hasMoreTasks,
    totalTasks: totalTasks
  };
  return {
    ...state,
    ...changesForState
  };
};

const addTask = (state, action) => {
  const { tasksList } = state;
  const { task } = action;

  task.isEditable = task.title.length && task.description.length ? false : true;
  // calculate to have unique task id
  task.tempId = tasksList.length + 9999999;

  const changesForState = {
    tasksList: [...tasksList, task],
  };
  return {
    ...state,
    ...changesForState

  }
}

const removeLastTask = (state) => {
  const { tasksList } = state;
  const tasks = tasksList.slice(0, tasksList.length - 1);
  const changesForState = {
    tasksList: [...tasks]
  };
  return {
    ...state,
    ...changesForState
  }
};

const deleteTask = (state, action) => {
  const { tasksList, totalTasks, deletedTasks } = state;
  const { id } = action;

  const updatedList = tasksList.filter(
    (task) => (task.id !== id && task.tempId !== id)
  );
  const changesForState = {
    tasksList: [...updatedList],
    totalTasks: totalTasks - 1,
    deletedTasks: deletedTasks + 1
  };
  return {
    ...state,
    ...changesForState
  }
};

const updateTask = (state, action) => {
  const { tasksList, totalTasks } = state;
  const { task } = action;

  const updatedList = [...tasksList];

  const index = updatedList.findIndex(item => ((item.id && item.id === task.id) || (item.tempId && item.tempId === task.tempId)));
  const updatesForTask = {
    id: task.id,
    tempId: task.id ? null : task.tempId,
    title: task.title,
    description: task.description,
    isEditable: task.title.length && task.description.length ? false : true
  };
  const updatedTask = {...updatedList[index], ...updatesForTask};
  updatedList[index] = updatedTask;

  const updatedTotalTasksValue = task.tempId ? totalTasks + 1 : 0
  //let updatedTask = { ...updatedList.find(item => ((item.id && item.id === task.id) || (item.tempId && item.tempId === task.tempId))), ...updatesForTask};

  // updatedTask.title = task.title;
  // updatedTask.description = task.description;
  // updatedTask.isEditable = task.title.length && task.description.length ? false : true;
  // }

  const changesForState = {
    tasksList: [...updatedList],
    totalTasks: updatedTotalTasksValue
  };
  return {
    ...state,
    ...changesForState

  }
};

const startEdit = (state, action) => {
  const { isEditInProcess } = action;

  return {
    ...state,
    isEditInProcess: isEditInProcess
  }
};

// const saveNewTask = (state, action) => {
//   const changesForState = {
//     tasksList: [...state.tasksList, action.task]
//   };
//   return {
//     ...state,
//     ...changesForState
//   }
// };

const fetchTaskPending = (state, action) => {
  const changesForState = {
    isLoading: action.loading
  };
  return {
    ...state,
    ...changesForState
  };
}

//const saveSuccess = () => ({...state, save})

const taskReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
      case ADD_TASK: return addTask(state, action);
      case REMOVE_LAST_TASK: return removeLastTask(state);
      case UPDATE_TASK: return updateTask(state, action);
      case SAVE_TASKS_LIST: return saveTaskList(state, action);
      case KEEP_EDIT_MODE: return startEdit(state, action);
      case DELETE_TASK: return deleteTask(state, action);
      case FETCH_TASK_PENDING: return fetchTaskPending(state, action);

      default:
          return state;
  }
};

export default taskReducer;