import actionCreatorFactory from 'typescript-fsa';
import { Dispatch } from 'redux';
import {initialize} from "redux-form";

import {ErrorWrapper} from '../../../viewModels';
import CommonUtilities from "../../../../helpers/CommonUtilities";
import {taskFormName} from "../Tasks.form.component";
import {TasksReduxState, REDUCER_NAME__TASKS} from "../Tasks.reducer";
import TaskApi from "../../../../api/Task.api";

const actionCreator = actionCreatorFactory();

/*
    CANCEL
 */

export const cancel = actionCreator<{}>('TASK/EDIT/CANCEL');

/*
    START
 */
export const startActions = actionCreator.async<{}, {id: number}, ErrorWrapper>('TASK/EDIT/START');

export function start(id: number) {
    return async (dispatch: Dispatch<any>) => {

        async function mainAction() {
            dispatch(startActions.started({}));
            const response = await TaskApi.getSingle(id);
            if (!response || !response.task) { // TODO: Fix this - use status codes
                throw `Item with Id ${id} not found`;
            }
            dispatch(initialize(taskFormName, response.task));
            dispatch(startActions.done({ params: {}, result: {id} }));
        }

        async function catchAction(exception: ErrorWrapper) {
            dispatch(startActions.failed({ params: {}, error: exception }));
            CommonUtilities.showSuccessToast('Error', 'Error has occurred');
            CommonUtilities.scrollToTop();
        }

        await CommonUtilities.tryCatchWrapper(mainAction, catchAction);
    };
}

/*
    SUBMIT
 */
export const submitActions = actionCreator.async<{}, {}, ErrorWrapper>('TASK/EDIT/SUBMIT');

export function submit(onSuccess: Function) {
    return async (dispatch: Dispatch<any>, getState: Function) => {

        async function mainAction() {
            dispatch(submitActions.started({}));
            const state = getState();

            let formValues = state.form[taskFormName].values || {};
            if (!formValues) {
                throw new ErrorWrapper('Nothing was filled');
            }

            const currentState: TasksReduxState = state[REDUCER_NAME__TASKS];
            if (!currentState.pendingUpdateId) {
                throw new ErrorWrapper('Id is missing');
            }

            await TaskApi.update(currentState.pendingUpdateId, formValues);
            dispatch(submitActions.done({ params: {}, result: {} }));
            CommonUtilities.showSuccessToast('Success', 'Item was successfully updated');
            if (onSuccess) {
                onSuccess();
            }
        }

        async function catchAction(exception: ErrorWrapper) {
            dispatch(submitActions.failed({ params: {}, error: exception }));
            CommonUtilities.showErrorToast('Error', 'Error has occurred');
            CommonUtilities.scrollToTop();
        }

        await CommonUtilities.tryCatchWrapper(mainAction, catchAction);
    };
}