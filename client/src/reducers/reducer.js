
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
            return state.map(task =>
            (task.id === action.payload.id)
                ? {...task, title:action.payload.title, description:action.payload.description}
                : task
            )
        case 'DELETE_TASK':
            return state.filter(task =>
                (task.id !== action.payload.id)
            )
        default:
            return state
    }
}

export default tasks;