import actionCreatorFactory from 'typescript-fsa';
import { Dispatch } from 'redux';

import {ErrorWrapper} from '../../../viewModels';
import CommonUtilities from "../../../../helpers/CommonUtilities";
import {TasksReduxState, REDUCER_NAME__TASKS} from "../Tasks.reducer";
import TaskApi from "../../../../api/Task.api";

const actionCreator = actionCreatorFactory();

/*
    CANCEL
 */

export const cancel = actionCreator<{}>('TASK/DELETE/CANCEL');

/*
    START
 */
export const startActions = actionCreator.async<{}, {id: number}, ErrorWrapper>('TASK/DELETE/START');

export function start(id: number) {
    return async (dispatch: Dispatch<any>) => {

        async function mainAction() {
            dispatch(startActions.started({}));
            const item = await TaskApi.getSingle(id);
            if (!item) {
                throw `Item with Id ${id} not found`;
            }
            dispatch(startActions.done({ params: {}, result: {id} }));
        }

        async function catchAction(exception: ErrorWrapper) {
            dispatch(startActions.failed({ params: {}, error: exception }));
            CommonUtilities.showErrorToast('Error', 'Error has occurred');
            CommonUtilities.scrollToTop();
        }

        await CommonUtilities.tryCatchWrapper(mainAction, catchAction);
    };
}

/*
    SUBMIT
 */
export const submitActions = actionCreator.async<{}, {}, ErrorWrapper>('TASK/DELETE/SUBMIT');

export function submit(onSuccess: Function) {
    return async (dispatch: Dispatch<any>, getState: Function) => {

        async function mainAction() {
            dispatch(submitActions.started({}));
            const state = getState();

            const currentState: TasksReduxState = state[REDUCER_NAME__TASKS];
            if (!currentState.pendingDeleteId) {
                throw new ErrorWrapper('Id is missing');
            }

            await TaskApi.remove(currentState.pendingDeleteId);
            dispatch(submitActions.done({ params: {}, result: {} }));
            CommonUtilities.showSuccessToast('Success', 'Item was successfully deleted');
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