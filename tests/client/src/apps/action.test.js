const expect = require('expect');
import {
    fetchTasks,
    addToDo,
    updateTask,
    deleteToDo
} from 'client/src/apps/actions';
import {
    validateReduxGet,
    validateReduxPost,
    validateReduxPut,
    validateReduxDelete
} from 'testutils/reduxtesthelper';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions Test Suite', () => {
    afterEach(() => {
        expect.restoreSpies();
    });

    it('P_Should_TestFetchDraft_Tasks', async () => {
        const store = mockStore({});
        const apiMeta = {
            url: '/tasks',
            query: {
                type: 'DRAFT'
            }
        };
        await store.dispatch(fetchTasks('DRAFT'));
        expect(store.getActions()[0]).toEqual({ type: 'FETCH_TASKS_INIT', payload: null, error: null });
        expect(store.getActions()[1]).toEqual({ type: 'FETCH_TASKS_SUCCESS', payload: { tasks: '', type: 'DRAFT' }});
        validateReduxGet(
            apiMeta,
            fetchTasks('DRAFT'),
            'FETCH_TASKS_INIT',
            [() => () => {}],
            ['FETCH_TASKS_FAILED', () => () => {}],
            store
        );
    });
    it('P_Should_TestAddTasks', async () => {
        const store = mockStore({});
        const apiMeta = {
            url: '/task/create/t1/d1',
            query: {
                type: 'DRAFT'
            }
        };

        await store.dispatch(addToDo('t1', 'd1'));
        expect(store.getActions()[0]).toEqual({ type: 'TASK_CREATE_INIT', payload: null, error: null });

        validateReduxPost(
            apiMeta,
            addToDo('t1', 'd1'),
            'TASK_CREATE_INIT',
            [() => () => {}],
            ['TASK_CREATE_FAILED', () => () => {}],
            store
        );
    });
    it('P_Should_TestUpdateTasks', () => {
        const store = mockStore({});
        const apiMeta = {
            url: '/task/update/1/t1',
            query: {
                type: 'DRAFT'
            }
        };
        validateReduxPut(
            apiMeta,
            updateTask('1', 'DRAFT', 't1'),
            'TASK_CREATE_INIT',
            [() => () => {}],
            ['TASK_CREATE_FAILED', () => () => {}],
            store
        );
    });
    it('P_Should_TestDeleteTask', () => {
        const store = mockStore({});
        const apiMeta = {
            url: '/task/delete/1',
            query: {
                type: 'DRAFT'
            }
        };
        validateReduxDelete(
            apiMeta,
            deleteToDo('1', 'DRAFT'),
            'NA',
            [() => () => {}],
            ['TASK_CREATE_FAILED', () => () => {}],
            store
        );
    });
});
