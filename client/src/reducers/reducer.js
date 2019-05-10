
const initialState = {
    tasks:[
        {id:0, title:'Task 1', description: 'wake up and shower!'}
    ]
};

(
    async () => {
        const rawResponse = await fetch('/tasks', {
        method: 'GET'
        });
        const content = await rawResponse.json();

        console.log(content);
    }
)();

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
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
        default:
            return state
    }
}

export default tasks;