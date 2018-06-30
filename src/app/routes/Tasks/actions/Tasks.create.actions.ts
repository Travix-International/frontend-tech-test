import actionCreatorFactory from 'typescript-fsa';
import { Dispatch } from 'redux';

import { ErrorWrapper } from '../../../viewModels';
import CommonUtilities from "../../../../helpers/CommonUtilities";
import {taskFormName} from "../Tasks.form.component";
import TaskApi from "../../../../api/Task.api";

const actionCreator = actionCreatorFactory();

/*
    CANCEL
 */

export const cancel = actionCreator<{}>('TASK/CREATE/CANCEL');

/*
    START
 */
export const startActions = actionCreator.async<{}, {}, ErrorWrapper>('TASK/CREATE/START');

export function start() {
    return async (dispatch: Dispatch<any>, getState: Function) => {

        async function mainAction() {
            dispatch(startActions.started({}));
            dispatch(startActions.done({ params: {}, result: {} }));
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
export const submitActions = actionCreator.async<{}, {}, ErrorWrapper>('TASK/CREATE/SUBMIT');

export function submit(onSuccess: Function) {
    return async (dispatch: Dispatch<any>, getState: Function) => {

        async function mainAction() {
            dispatch(submitActions.started({}));
            let formValues = getState().form[taskFormName].values || {};
            await TaskApi.add(formValues);
            dispatch(submitActions.done({ params: {}, result: {} }));
            CommonUtilities.showSuccessToast('Success', 'Item was successfully created');
            if (onSuccess) {
                onSuccess();
            }
        }

        async function catchAction(exception: ErrorWrapper) {
            dispatch(submitActions.failed({ params: {}, error: exception }));
            CommonUtilities.showErrorToast('Error', 'Error has occurred');
            CommonUtilities.logDevMessage(exception);
            CommonUtilities.scrollToTop();
        }

        await CommonUtilities.tryCatchWrapper(mainAction, catchAction);
    };
}