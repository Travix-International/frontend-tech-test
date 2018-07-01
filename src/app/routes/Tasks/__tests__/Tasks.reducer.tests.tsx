import reducer from '../Tasks.reducer';
import TasksResponseViewModel from "../viewModels/TasksResponseViewModel";
import {TableData} from "../../../viewModels";
import {Action} from 'redux';
import {expect} from 'chai';
import {asyncActions as FetchActions} from "../actions/Tasks.fetch.action";

const defaultState = {
    loading: false,
    tableData: TableData.getDefault<TasksResponseViewModel>(),
    pendingAdd: false,
    pendingUpdateId: undefined,
    pendingDeleteId: undefined,
    confirmLoading: false
};

describe('tasks reducer', () => {
    it('should return the initial state', () => {
        const noAction: Action<any> = {type: ''};
        expect(reducer(defaultState, noAction)).to.deep.equal(defaultState);
    });

    it('should handle TASKS/FETCH action', () => {
        const tableData = TableData.getDefault<TasksResponseViewModel>();
        const item = new TasksResponseViewModel();
        item.id = 1;
        item.title = 'title';
        item.description = 'description';
        tableData.data.push(item);

        const fetchAction = FetchActions.done({params: {}, result: { tableData }});
        const newState = reducer(defaultState, fetchAction);
        expect(newState).to.deep.equal({
            type: FetchActions.done.type,
            loading: false,
            tableData, // modified table data
            pendingAdd: false,
            pendingUpdateId: undefined,
            pendingDeleteId: undefined,
            confirmLoading: false,
            error: null
        });
    })
});