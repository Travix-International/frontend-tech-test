import { getTaskServie, createTaskServie, editTaskServie, deleteTaskServie} from './app.service';
import _get from 'lodash/get';

export const TODO_ACTIONS = {
    // actions to get tasks from server
    GET_TASKS: 'GET_TASKS',
    GET_TASKS_SUCCESS: 'GET_TASKS_SUCCESS',
    GET_TASKS_FAILURE: 'GET_TASKS_FAILURE',
    
    //actions to create task
    CREATE_TASK: 'CREATE_TASK',
    CREATE_TASK_SUCCESS: 'CREATE_TASK_SUCCESS',
    CREATE_TASK_FAILURE: 'CREATE_TASK_FAILURE',

    //actions to edit task
    EDIT_TASK: 'EDIT_TASK',
    EDIT_TASK_SUCCESS: 'EDIT_TASK_SUCCESS',
    EDIT_TASK_FAILURE: 'EDIT_TASK_FAILURE',
    
    //actions to delete task
    DELETE_TASK: 'DELETE_TASK',
    DELETE_TASK_SUCCESS: 'DELETE_TASK_SUCCESS',
    DELETE_TASK_FAILURE: 'DELETE_TASK_FAILURE',

    REQUESTING_API: 'REQUESTING_API',
}

export const getTasks = () => {
    return async(dispatch,getState) => {
        const offset = getState().todo.totalCount;
        dispatch({type: TODO_ACTIONS.GET_TASKS})
        try{
            const response = await getTaskServie({offset, size: 70000});
            const tasks  =_get(response.data, 'data');
            const totalCount = _get(response.data, 'totalCount');
            dispatch({type: TODO_ACTIONS.GET_TASKS_SUCCESS, tasks,totalCount});
            
        } catch(error){
            dispatch({type: TODO_ACTIONS.GET_TASKS_FAILURE, error})
        }
    }
};

export const createTask = (task, closeModal) => {
    return async(dispatch, getState) => {
        dispatch({type: TODO_ACTIONS.CREATE_TASK})
        dispatch({type: TODO_ACTIONS.REQUESTING_API, payload: true})
        try{
            const response = await createTaskServie(task);
            const taskData  =_get(response.data, 'data'); 
            const totalCount = _get(response.data, 'totalCount');
            const tasks =  {..._get(getState().todo.tasks), [taskData.id]: {...taskData}}
            dispatch({type: TODO_ACTIONS.CREATE_TASK_SUCCESS, tasks, totalCount});
            
        } catch(error){
            dispatch({type: TODO_ACTIONS.CREATE_TASK_FAILURE, error})
        } finally{
           dispatch({type: TODO_ACTIONS.REQUESTING_API, payload: false})
           closeModal();
        }
    }
};

export const editTask = (task, closeModal) => {
    return async(dispatch, getState) => {
        dispatch({type: TODO_ACTIONS.EDIT_TASK})
        dispatch({type: TODO_ACTIONS.REQUESTING_API, payload: true})
        try{
            const response = await editTaskServie(task);
            const taskData  =_get(response.data, 'data'); 
            const totalCount = _get(response.data, 'totalCount');
            const tasks =  {..._get(getState().todo.tasks), [taskData.id]: {...taskData}}
            dispatch({type: TODO_ACTIONS.EDIT_TASK_SUCCESS, tasks, totalCount});
            
        } catch(error){
            dispatch({type: TODO_ACTIONS.EDIT_TASK_FAILURE, error})
        } finally{
           dispatch({type: TODO_ACTIONS.REQUESTING_API, payload: false})
           closeModal();
        }
    }
};

export const deleteTask = (task) => {
    return async(dispatch, getState) => {
        dispatch({type: TODO_ACTIONS.DELETE_TASK})
        dispatch({type: TODO_ACTIONS.REQUESTING_API, payload: true})
        try{
            await deleteTaskServie(task);
            const tasks = getState().todo.tasks;
            const updatedTasks =  {...tasks, [task.id]: {...task,isDeleted: true}}
            dispatch({type: TODO_ACTIONS.DELETE_TASK_SUCCESS, tasks: updatedTasks, totalCount: getState().todo.totalCount-1});
            
        } catch(error){
            dispatch({type: TODO_ACTIONS.DELETE_TASK_FAILURE, error})
        } finally{
           dispatch({type: TODO_ACTIONS.REQUESTING_API, payload: false})
        }
    }
};
