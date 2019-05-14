import { GET_TASKS_SUCCESS, FILTER_TASKS, SORT_TASKS, EDIT_TASK_SUCCESS, EDIT_TASK_FAILURE,
    DELETE_TASK_SUCCESS, DELETE_TASK_FAILURE, CREATE_TASK_SUCCESS, CREATE_TASK_FAILURE } from '../constants/action-types';

const initialState = {
    tasks:[],
    filteredTasks:[],
    filter:"",
    sort:"Sort By",
    message:""
};

const filterTasks = (state, action) => {
    let tasks = [...state.tasks];
    if (action.payload && action.payload.length > 0) {
        let filteredTasks = filter(tasks, action.payload);
        if (state.sort !== "Sort By") {
            filteredTasks = sort(filteredTasks, state.sort);
        }
        return filteredTasks;
    } else {
        if (state.sort !== "Sort By") {
            tasks = sort(tasks, state.sort);
        }
        return tasks;
    }
}

const filter = (tasks, query) => {
    let myRe = new RegExp(query,"gi");
        let filteredTasks = tasks.filter((task)=>{
            return (task.title.search(myRe) !==-1 || task.description.search(myRe) !==-1 );
        });
        return filteredTasks;
}

const sortTasks = (state, action) => {
    let tasks = (state.filter)? [...state.filteredTasks] : [...state.tasks];
    if (action.payload && action.payload !== 'Sort By') {
        tasks = sort(tasks, action.payload);
        return tasks;
    } else {
        return (state.filter)? [...state.filteredTasks] : [...state.tasks];
    }
}

const sort = (tasks, property) => {
    property = property.toLowerCase();
    tasks.sort((a,b)=>{
        if (a[property].toLowerCase() < b[property].toLowerCase()) {
            return -1;
        } else if (a[property].toLowerCase() > b[property].toLowerCase()) {
            return 1;
        } else {
            return 0;
        }
    });
    return tasks;
}

const getTasksSuccess = (state, action) => {
    console.log(state,action);
    let tasks = [...action.payload.tasks];
    if (state.filter !== "") {
        tasks = [...filter(tasks, state.filter)];
    }
    if (state.sort !== "Sort By") {
        
        tasks = [...sort(tasks, state.sort)];
    }
    return tasks;
}

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_TASK_SUCCESS:
            return Object.assign({}, state, {
                message:action.payload
            });
        case DELETE_TASK_SUCCESS:
            return Object.assign({}, state, {
                message:action.payload
            });
        case CREATE_TASK_SUCCESS:
            return Object.assign({}, state, {
                message:action.payload
            });
        case GET_TASKS_SUCCESS:
            console.log(state, action);
            let transformedTasks = getTasksSuccess(state, action);
            return Object.assign({}, state, {
                tasks: [...action.payload.tasks],
                filteredTasks: transformedTasks
            });
        case FILTER_TASKS:
            console.log(action);
            let filteredTasks = filterTasks(state, action);
            return Object.assign({}, state, {
                filteredTasks: filteredTasks,
                filter: action.payload
            });
        case SORT_TASKS:
            console.log(action);
            let sortedTasks = sortTasks(state, action);
            return Object.assign({}, state, {
                filteredTasks: sortedTasks,
                sort:action.payload
            });
        case CREATE_TASK_FAILURE:
            return Object.assign({}, state, {
                message:action.payload
            });
        case EDIT_TASK_FAILURE:
            return Object.assign({}, state, {
                message:action.payload
            });
        case DELETE_TASK_FAILURE:
            return Object.assign({}, state, {
                message:action.payload
            });
        default:
            return state
    }
}

export default tasks;