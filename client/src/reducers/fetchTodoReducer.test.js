import fetchTodoReducer from './fetchTodoReducer';

describe('users Reducer', () => {
    const initialState = {
        tasks: [],
        task: {}
    };

    it('returns the initial state when an action type is not passed', () => {
        const reducer = fetchTodoReducer(undefined, {});
        expect(reducer).toEqual(initialState);
    });

    it('handles FETCH_TODOLIST as expected', () => {
        const reducer = fetchTodoReducer(initialState, {
            type: "FETCH_TODOLIST",
            payload: [{
                id: 0,
                title: "test title",
                description: "test description"
            }]
        });
        expect(reducer).toEqual({
            tasks: [
                {
                    id: 0,
                    title: "test title",
                    description: "test description"
                }
            ],
            task: {}
        });
    });

    it('handles FETCH_TODO as expected', () => {
        const reducer = fetchTodoReducer(initialState, {
            type: "FETCH_TODO",
            payload: {
                id: 0,
                title: "test title",
                description: "test description"
            }
        });
        expect(reducer).toEqual({
            tasks: [],
            task: {
                    id: 0,
                    title: "test title",
                    description: "test description"
                }
        });
    });
});