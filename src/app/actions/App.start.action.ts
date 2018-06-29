import actionCreatorFactory from 'typescript-fsa';
import { Dispatch } from 'redux';
import { toastr } from 'react-redux-toastr';

import { ErrorWrapper } from '../viewModels/ErrorWrapper';
import CommonUtils from '../../helpers/CommonUtilities';

const actionCreator = actionCreatorFactory();
export const asyncActions = actionCreator.async<
    {},
    {},
    ErrorWrapper
>('APP/START');

export default function submit() {
    return async (dispatch: Dispatch<any>) => {

        async function mainAction() {
            dispatch(asyncActions.started({}));
            // Do any work here
            dispatch(asyncActions.done({ params: {}, result: {} }));
        }

        async function catchAction(exception: ErrorWrapper) {
            dispatch(asyncActions.failed({ params: {}, error: exception }));
            toastr.error('Error', 'Error has occurred');
            CommonUtils.scrollToTop();
        }

        await CommonUtils.tryCatchWrapper(mainAction, catchAction);
    };
}