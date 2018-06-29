import {PaginationOptions, TableData} from "../app/viewModels";
import {Dispatch} from "redux";
import {SortOrder} from "react-bootstrap-table";

export default class TableFormattingUtilities {
    public static getOnSortChangeAction<T>(submit: (SpeysPagination) => any, reducerKey: string, sortName: string, sortOrder: SortOrder) {
        return async (dispatch: Dispatch<any>, getState: Function) => {
            const currentState = getState()[reducerKey];
            const tableData: TableData<T> = currentState.tableData;
            const viewModel: PaginationOptions = tableData.pagination;
            viewModel.sortName = sortName;
            viewModel.sortOrder = sortOrder;
            dispatch(submit(viewModel));
        };
    }

    public static getOnPageChangeAction<T>(submit: (SpeysPagination) => any, reducerKey: string, page: number, sizePerPage: number) {
        return async (dispatch: Dispatch<any>, getState: Function) => {
            const currentState = getState()[reducerKey];
            const tableData: TableData<T> = currentState.tableData;
            const viewModel: PaginationOptions = tableData.pagination;
            viewModel.page = page;
            viewModel.sizePerPage = sizePerPage;
            dispatch(submit(viewModel));
        };
    }

    public static getOnSizePerPageList<T>(submit: (SpeysPagination) => any, reducerKey: string, sizePerPage: number) {
        return async (dispatch: Dispatch<any>, getState: Function) => {
            const currentState = getState()[reducerKey];
            const tableData: TableData<T> = currentState.tableData;
            const viewModel: PaginationOptions = tableData.pagination;
            viewModel.sizePerPage = sizePerPage;
            dispatch(submit(viewModel));
        };
    }
}