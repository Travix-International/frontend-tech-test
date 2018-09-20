import actionTypes from '../actions/actionTypes';

const initialState = {
    tasks: [],
};

const tasksReducer = (tasksState = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_TASK:
            return {
                ...tasksState,
            };
        case actionTypes.SAVE_TASK:
            return {
                ...tasksState,
            };
        case actionTypes.UPDATE_TASK:
            return {
                ...tasksState,
            };
        case actionTypes.DELETE_TASK:
            return {
                ...tasksState,
            };
        default:
            return tasksState;
    }
};

export default tasksReducer;