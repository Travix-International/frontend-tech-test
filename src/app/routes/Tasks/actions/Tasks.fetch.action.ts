import actionCreatorFactory from 'typescript-fsa';
import { Dispatch } from 'redux';
import {SortOrder} from "react-bootstrap-table";

import CommonUtilities from '../../../../helpers/CommonUtilities';
import {ErrorWrapper, TableData, PaginationOptions} from '../../../viewModels';
import TasksResponseViewModel from "../viewModels/TasksResponseViewModel";
import TodosApi from "../../../../api/Task.api";
import {REDUCER_NAME__TASKS} from "../Tasks.reducer";
import TableFormattingUtilities from "../../../../helpers/TableFormattingUtilities";

const actionCreator = actionCreatorFactory();
export const asyncActions = actionCreator.async<
    {},
    {tableData: TableData<TasksResponseViewModel>},
    ErrorWrapper
>('TASKS/FETCH');

export default function submit(paginationParams: PaginationOptions | null): any {
    return async (dispatch: Dispatch<any>) => {

        async function mainAction() {
            dispatch(asyncActions.started({}));

            paginationParams = paginationParams || PaginationOptions.getDefault();
            const paginatedList = await TodosApi.getList({...paginationParams});
            const tableData = TableData.createTableDataFrom(
                paginatedList,
                paginationParams.page,
                paginationParams.sizePerPage
            );
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

//
// Sorting and pagination
//

export function onSortChange(sortName: string, sortOrder: SortOrder) {
    return TableFormattingUtilities.getOnSortChangeAction((viewModel) =>
        submit(viewModel), REDUCER_NAME__TASKS, sortName, sortOrder);
}

export function onPageChange(page: number, sizePerPage: number) {
    return TableFormattingUtilities.getOnPageChangeAction((viewModel) =>
        submit(viewModel), REDUCER_NAME__TASKS, page, sizePerPage);
}

export function onSizePerPageList(sizePerPage: number) {
    return TableFormattingUtilities.getOnSizePerPageList((viewModel) =>
        submit(viewModel), REDUCER_NAME__TASKS, sizePerPage);
}