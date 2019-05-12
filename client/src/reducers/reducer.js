import { GET_TASKS_SUCCESS, FILTER_TASKS, SORT_TASKS} from '../constants/action-types';
const initialState = {
    tasks:[],
    filteredTasks:[],
    filter:"",
    sort:""
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

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_TASK':
            console.log(state);
            action.payload.id = state.tasks.length;
            return Object.assign({}, state, {
                tasks: state.tasks.concat(action.payload)
            });
        case 'EDIT_TASK':
            console.log(action);
            let newState = {...state};
            let editedTask = {...action.payload};
            console.log(editedTask);
            newState.tasks.splice(action.payload.id, 1, action.payload);
            console.log(newState);
            return newState;
        case 'DELETE_TASK':
            return Object.assign({}, state, {
                tasks: state.tasks.filter((task)=>task.id!==parseInt(action.payload.id, 10))
            });
        case GET_TASKS_SUCCESS:
            console.log(action);
            return Object.assign({}, state, {
                tasks: [...action.payload.tasks],
                filteredTasks: [...action.payload.tasks]
            });
        case FILTER_TASKS:
            console.log(action);
            let tasks = [...state.tasks];
            if (action.payload.length > 0) {
                let myRe = new RegExp(action.payload,"gi");
                let filteredTasks = tasks.filter((task)=>{
                    return (task.title.search(myRe) !==-1 || task.description.search(myRe) !==-1 ); 
                });
                return Object.assign({}, state, {
                    filteredTasks: filteredTasks,
                    filter: action.payload
                });
            } else {
                return Object.assign({}, state, {
                    filteredTasks: [...state.tasks],
                    filter: action.payload
                });
            }
        case SORT_TASKS:
            console.log(action);
            if (action.payload !== 'Sort By') {
                let preTasks = (state.filter)? [...state.filteredTasks] : [...state.tasks];
                preTasks.sort((a,b)=>{
                    if (a[action.payload.toLowerCase()] < b[action.payload.toLowerCase()]) {
                        return -1;
                    } else if (a[action.payload] > b[action.payload]) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
                console.log(preTasks);
                return Object.assign({}, state, {
                    filteredTasks: preTasks,
                    sort:action.payload
                });
            } else {
                return Object.assign({}, state, {
                    filteredTasks: (state.filter)? [...state.filteredTasks] : [...state.tasks],
                    sort:action.payload
                });
            }
        default:
            return state
    }
}

export default tasks;