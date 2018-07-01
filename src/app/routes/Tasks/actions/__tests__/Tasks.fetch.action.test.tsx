import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {expect} from 'chai';
import getList, {asyncActions} from '../Tasks.fetch.action';​
import axios from 'axios';
import TasksResponseViewModel from "../../viewModels/TasksResponseViewModel";
import {TableData} from "../../../../viewModels/index";
import TaskSearchOptions from "../../viewModels/TaskSearchOptions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const axiosMock = new MockAdapter(axios);

describe('async actions', () => {
    afterEach(() => {
        axiosMock.reset();
        axiosMock.restore();
    });

    it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
        const expectedTasks = [{id: 1, title: 'test1', description: 'test1'}];
        axiosMock.onGet('http://localhost:5000/api/tasks').reply(200, {
            contextObjects: expectedTasks,
            totalCount: 1,
            pages: 1
        });

        const store = mockStore({tasks: {
                loading: false,
                tableData: TableData.getDefault<TasksResponseViewModel>(),
                pendingAdd: false,
                pendingUpdateId: undefined,
                pendingDeleteId: undefined,
                confirmLoading: false
            }});

        return store.dispatch(getList(TaskSearchOptions.getDefault()))
            .then(() => {
                const actualActions = store.getActions();
                expect(actualActions.length).to.equal(2);
                const startedAction = actualActions.find(action => action.type === asyncActions.started.type);
                expect(startedAction).to.not.equal(undefined);
                const doneAction = actualActions.find(action => action.type === asyncActions.done.type);
                const actualTasks = doneAction.payload.result.tableData.data;
                expect(expectedTasks).to.deep.equal(actualTasks);
            });
    })
});