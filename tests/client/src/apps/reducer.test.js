const expect = require('expect');
import todoReducer, { initialState } from 'client/src/apps/reducers';

describe('Test Todo Reducers', () => {
    it('P_Should_Handle_FETCH_TASKS_INIT', () => {
        expect(todoReducer(initialState, {
            type: 'FETCH_TASKS_INIT'
        })).toEqual({
            ...initialState,
            fetchInProgress: true
        });
    });
    it('P_Should_Handle_FETCH_TASKS_SUCCESS_DRAFT', () => {
        expect(todoReducer(initialState, {
            type: 'FETCH_TASKS_SUCCESS',
            payload: {
                type: 'DRAFT',
                tasks: {
                    1: {
                        id: 1,
                        title: 't1',
                        description: 'd1'
                    }
                }
            }
        })).toEqual({
            ...initialState,
            fetchInProgress: false,
            fetchSuccess: true,
            taskCreateInProgress: false,
            DRAFT: {
                1: {
                    id: 1,
                    title: 't1',
                    description: 'd1'
                }
            }
        });
    });
    it('P_Should_Handle_FETCH_TASKS_SUCCESS_IN_PROGRESS', () => {
        expect(todoReducer(initialState, {
            type: 'FETCH_TASKS_SUCCESS',
            payload: {
                type: 'IN_PROGRESS',
                tasks: {
                    1: {
                        id: 1,
                        title: 't1',
                        description: 'd1'
                    }
                }
            }
        })).toEqual({
            ...initialState,
            fetchInProgress: false,
            fetchSuccess: true,
            taskCreateInProgress: false,
            IN_PROGRESS: {
                1: {
                    id: 1,
                    title: 't1',
                    description: 'd1'
                }
            }
        });
    });
    it('P_Should_Handle_FETCH_TASKS_FAILED', () => {
        expect(todoReducer(initialState, {
            type: 'FETCH_TASKS_FAILED'
        })).toEqual({
            ...initialState,
            fetchInProgress: false,
            fetchFailed: true
        });
    });
    it('P_Should_Handle_TASK_CREATE_INIT', () => {
        expect(todoReducer(initialState, {
            type: 'TASK_CREATE_INIT'
        })).toEqual({
            ...initialState,
            taskCreateInProgress: true
        });
    });
    it('P_Should_Handle_TASK_CREATE_FAILED', () => {
        expect(todoReducer(initialState, {
            type: 'TASK_CREATE_FAILED'
        })).toEqual({
            ...initialState,
            taskCreateInProgress: false
        });
    });
    it('P_Should_Handle_INVALID_ACTION', () => {
        expect(todoReducer(initialState, {
            type: 'INVALID'
        })).toEqual({
            ...initialState
        });
    });
});
