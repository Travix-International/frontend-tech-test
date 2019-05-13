import { GET_TASKS_SUCCESS, FILTER_TASKS, SORT_TASKS} from '../constants/action-types';
const initialState = {
    tasks:[],
    filteredTasks:[],
    filter:"",
    sort:"Sort By"
};
// {id:0, title:'Task 1', description: 'wake up and shower!'}
// (
//     async () => {
//         const rawResponse = await fetch('/tasks', {
//         method: 'GET'
//         });
//         const content = await rawResponse.json();

//         console.log(content);
//     }
// )();

const filterTasks = (state, action) => {
    let tasks = [...state.tasks];
    if (action.payload && action.payload.length > 0) {
        let filteredTasks = filter(tasks, action.payload);
        if (state.sort !== "Sort By") {
            //let property = state.sort.toLowerCase();
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
        // let property = action.payload.toLowerCase();
        tasks = sort(tasks, action.payload);
        console.log(tasks);
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
    console.log(tasks);
    return tasks;
}

const getTasksSuccess = (state, action) => {
    console.log(state,action);
    let tasks = [...action.payload.tasks];
    //let filteredTasks = [], sortedTasks = [];
    // let filteredTasks = filterTasks({tasks:[...action.payload.tasks]},{payload:state.filter? state.filter: ""});
    if (state.filter !== "") {
        tasks = [...filter(tasks, state.filter)];
    }
    //console.log(filteredTasks);
    if (state.sort !== "Sort By") {
        //let preSortedTasks = (filteredTasks.length > 0) ? filteredTasks: tasks;
        //let property = state.sort.toLowerCase();
        tasks = [...sort(tasks, state.sort)];
    }
    // let sortedTasks = sortTasks({tasks:[...filteredTasks], filteredTasks:[...filteredTasks], filter:state.filter},{payload:state.sort});
    return tasks;
}

const tasks = (state = initialState, action) => {
    switch (action.type) {
        // case 'CREATE_TASK':
        //     console.log(state);
        //     action.payload.id = state.tasks.length;
        //     return Object.assign({}, state, {
        //         tasks: state.tasks.concat(action.payload)
        //     });
        // case 'EDIT_TASK':
        //     console.log(action);
        //     let newState = {...state};
        //     let editedTask = {...action.payload};
        //     console.log(editedTask);
        //     newState.tasks.splice(action.payload.id, 1, action.payload);
        //     console.log(newState);
        //     return newState;
        // case 'DELETE_TASK':
        //     return Object.assign({}, state, {
        //         tasks: state.tasks.filter((task)=>task.id!==parseInt(action.payload.id, 10))
        //     });
        
        case GET_TASKS_SUCCESS:
            console.log(state, action);
            console.log(getTasksSuccess(state, action));
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
        default:
            return state
    }
}

export default tasks;