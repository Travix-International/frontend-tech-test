export const initialState = {
    fetchInProgress: false,
    fetchSuccess: false,
    fetchFailed: false,
    taskCreateInProgress: false
};

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
    case 'FETCH_TASKS_INIT':
        return {
            ...state,
            fetchInProgress: true
        };
    case 'FETCH_TASKS_SUCCESS':
        return {
            ...state,
            fetchInProgress: false,
            fetchSuccess: true,
            taskCreateInProgress: false,
            [action.payload.type]: action.payload.tasks
        };
    case 'FETCH_TASKS_FAILED':
        return {
            ...state,
            fetchInProgress: false,
            fetchFailed: true
        };
    case 'TASK_CREATE_INIT':
        return {
            ...state,
            taskCreateInProgress: true
        };
    case 'TASK_CREATE_FAILED':
        return {
            ...state,
            taskCreateInProgress: false
        };
    default:
        return state;
    }
}
