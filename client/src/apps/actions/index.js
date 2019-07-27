import { reduxPost, reduxDelete, reduxGet, reduxPut } from 'utils/reduxHelper';

export const addToDo = (title, description, type = 'DRAFT') =>
    (dispatch) => {
        return new Promise((resolve, reject) => {
            reduxPost(
                {
                    url: `/task/create/${title}/${description}`,
                    query: {
                        type
                    }
                },
                'TASK_CREATE_INIT',
                () => () => {
                    dispatch(fetchTasks('DRAFT'));
                    dispatch(fetchTasks('IN_PROGRESS'));
                    dispatch(fetchTasks('COMPLETED'));
                    resolve("task created");
                },
                () => () => {
                    dispatch({
                        type: 'TASK_CREATE_FAILED'
                    });
                    reject(undefined);
                },
                dispatch,
            );    
        });
    };

export const deleteToDo = (id, type) =>
    (dispatch) => {
        return new Promise((resolve, reject) => {
            reduxDelete(
                {
                    url: `/task/delete/${id}`,
                    query: {
                        type
                    }
                },
                'NA',
                () => () => {
                    dispatch(fetchTasks(type));
                    resolve("task deleted");
                },
                () => () => {
                    reject(undefined);
                },
                dispatch,
            );    
        });
    };

export const fetchTasks = (type) => (dispatch) => (
    reduxGet(
        {
            url: '/tasks',
            query: {
                type
            }
        },
        'FETCH_TASKS_INIT',
        (response) => () => {
            dispatch({
                type: 'FETCH_TASKS_SUCCESS',
                payload: {
                    tasks: response,
                    type
                }
            })
        },
        'FETCH_TASKS_FAILED',
        dispatch
    )
);

export const updateTask = (id, type, title) => (dispatch) => (
    new Promise((resolve, reject) => {
        reduxPut(
            {
                url: `/task/update/${id}/${title}`,
                query: {
                    type
                }
            },
            'TASK_CREATE_INIT',
            () => () => {
                dispatch(fetchTasks(type));
                resolve("task created");
            },
            () => () => {
                dispatch({
                    type: 'TASK_CREATE_FAILED'
                });
                reject(undefined);
            },
            dispatch,
        );    
    })
)

export const transferTask = (id, sourceType, targetType) => (dispatch, getState) => {
    const state = getState().todos;
    const sourceTask = state[sourceType][id];
    dispatch(addToDo(sourceTask.title, sourceTask.description, targetType));
    dispatch(deleteToDo(sourceTask.id, sourceType));
}