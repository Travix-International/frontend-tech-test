const initialState = {
    tasks: [],
    task: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TODOLIST':
            return {
                ...state,
                tasks: action.payload

            }
        case 'FETCH_TODO':
            return {
                ...state,
                task: action.payload

            }
        default:
            return state;

    }
}