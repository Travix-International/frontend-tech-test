import PaginationOptions from "./PaginationOptions";
import PaginatedListResult from "./PaginatedListResult";

export default class TableData<T> {
    data: Array<T>;
    pagination: PaginationOptions;

    public static createTableDataFrom<T>(
        paginatedListResult: PaginatedListResult<T>,
        page: number,
        sizePerPage: number): TableData<T> {

        const data = paginatedListResult.contextObjects;
        const pagination: PaginationOptions = { total: paginatedListResult.totalCount, page, sizePerPage };
        return new TableData(data, pagination);
    }

    public static getDefault<T>(): TableData<T> {
        return new TableData<T>([], PaginationOptions.getDefault());
    }

    constructor(data: Array<T>, pagination: PaginationOptions | null) {
        this.data = data;
        this.pagination = pagination || PaginationOptions.getDefault();
    }
}