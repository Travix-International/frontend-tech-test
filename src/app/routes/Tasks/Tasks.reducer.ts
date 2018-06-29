import { Action } from 'redux';
import { isType } from 'typescript-fsa';
import { asyncActions as FetchActions } from './actions/Tasks.fetch.action';
import { 
    cancel as createCancel, 
    startActions as createStartActions, 
    submitActions as createSubmitActions 
} from './actions/Tasks.create.actions';
import {
    cancel as editCancel,
    startActions as editStartActions, 
    submitActions as editSubmitActions
} from "./actions/Tasks.update.actions";
import {
    cancel as deleteCancel,
    startActions as deleteStartActions,
    submitActions as deleteSubmitActions
} from "./actions/Tasks.delete.actions";
import {ErrorWrapper, TableData} from "../../viewModels";
import TasksResponseViewModel from "./viewModels/TasksResponseViewModel";

export const REDUCER_NAME__TASKS = 'tasks';

export interface TasksReduxState {
    type?: string;
    loading: boolean;
    error?: ErrorWrapper | null;
    tableData: TableData<TasksResponseViewModel>;
    pendingAdd: boolean | undefined;
    pendingUpdateId: number | undefined;
    pendingDeleteId: number | undefined;
    confirmLoading: boolean | undefined;
}
const defaultState: TasksReduxState = {
    loading: false,
    tableData: TableData.getDefault<TasksResponseViewModel>(),
    pendingAdd: false,
    pendingUpdateId: undefined,
    pendingDeleteId: undefined,
    confirmLoading: false
};
export default (state: TasksReduxState = defaultState, action: Action): TasksReduxState => {

    // Get items
    if (isType(action, FetchActions.started)) {
        return {...state, type: action.type, loading: true,  error: null};
    }
    if (isType(action, FetchActions.done)) {
        return {...state, type: action.type, loading: false, tableData: action.payload.result.tableData, error: null};
    }
    if (isType(action, FetchActions.failed)) {
        return {...state, type: action.type, loading: false,  error: action.payload.error};
    }

    // Create actions
    if (isType(action, createCancel)) {
        return {...state, type: action.type, confirmLoading: false, pendingAdd: false };
    }
    if (isType(action, createStartActions.started)) {
        return {...state, type: action.type, confirmLoading: true};
    }
    if (isType(action, createStartActions.done)) {
        return { ...state, type: action.type, confirmLoading: false, pendingAdd: true };
    }
    if (isType(action, createStartActions.failed)) {
        return {...state, type: action.type, confirmLoading: false};
    }
    if (isType(action, createSubmitActions.started)) {
        return {...state, type: action.type, confirmLoading: true};
    }
    if (isType(action, createSubmitActions.done)) {
        return {...state, type: action.type, confirmLoading: false, pendingAdd: false };
    }
    if (isType(action, createSubmitActions.failed)) {
        return {...state, type: action.type, error: action.payload.error, confirmLoading: false};
    }

    // Edit actions
    if (isType(action, editCancel)) {
        return {...state, type: action.type, confirmLoading: false, pendingUpdateId: undefined};
    }
    if (isType(action, editStartActions.started)) {
        return {...state, type: action.type, confirmLoading: true};
    }
    if (isType(action, editStartActions.done)) {
        return {...state, type: action.type, confirmLoading: false, pendingUpdateId: action.payload.result.id};
    }
    if (isType(action, editStartActions.failed)) {
        return {...state, type: action.type, confirmLoading: false, error: action.payload.error};
    }
    if (isType(action, editSubmitActions.started)) {
        return {...state, type: action.type, confirmLoading: true};
    }
    if (isType(action, editSubmitActions.done)) {
        return {...state, type: action.type, pendingUpdateId: undefined, confirmLoading: false};
    }
    if (isType(action, editSubmitActions.failed)) {
        return {...state, type: action.type, error: action.payload.error, confirmLoading: false};
    }

    // Delete actions
    if (isType(action, deleteCancel)) {
        return {...state, type: action.type, confirmLoading: false, pendingDeleteId: undefined};
    }
    if (isType(action, deleteStartActions.started)) {
        return {...state, type: action.type, confirmLoading: true};
    }
    if (isType(action, deleteStartActions.done)) {
        return {...state, type: action.type, confirmLoading: false, pendingDeleteId: action.payload.result.id};
    }
    if (isType(action, deleteStartActions.failed)) {
        return {...state, type: action.type, confirmLoading: false, error: action.payload.error};
    }
    if (isType(action, deleteSubmitActions.started)) {
        return {...state, type: action.type, confirmLoading: true};
    }
    if (isType(action, deleteSubmitActions.done)) {
        return {...state, type: action.type, pendingDeleteId: undefined, confirmLoading: false};
    }
    if (isType(action, deleteSubmitActions.failed)) {
        return {...state, type: action.type, error: action.payload.error, confirmLoading: false};
    }

    return state;
};