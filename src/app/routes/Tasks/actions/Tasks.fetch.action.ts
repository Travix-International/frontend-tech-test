import actionCreatorFactory from 'typescript-fsa';
import { Dispatch } from 'redux';

import CommonUtilities from '../../../../helpers/CommonUtilities';
import {ErrorWrapper, TableData} from '../../../viewModels';
import TasksResponseViewModel from "../viewModels/TasksResponseViewModel";
import TasksApi from "../../../../api/Task.api";
import TaskSearchOptions from "../viewModels/TaskSearchOptions";

const actionCreator = actionCreatorFactory();
export const asyncActions = actionCreator.async<{}, {tableData: TableData<TasksResponseViewModel>}, ErrorWrapper>('TASKS/FETCH');

export default function submit(searchOptions: TaskSearchOptions): any {
    return async (dispatch: Dispatch<any>) => {

        async function mainAction() {
            dispatch(asyncActions.started({}));

            CommonUtilities.logDevMessage('searchOptions', searchOptions);
            const paginatedList = await TasksApi.getList({...searchOptions});
            const tableData = TableData.createTableDataFrom(paginatedList, searchOptions.page, searchOptions.sizePerPage);
            dispatch(asyncActions.done({ params: {}, result: {tableData} }));
        }

        async function catchAction(exception: ErrorWrapper) {
            dispatch(asyncActions.failed({ params: {}, error: exception }));
            CommonUtilities.showErrorToast('Error', 'Error has occurred');
            CommonUtilities.logDevMessage(exception);
            CommonUtilities.scrollToTop();
        }

        await CommonUtilities.tryCatchWrapper(mainAction, catchAction);
    };
}