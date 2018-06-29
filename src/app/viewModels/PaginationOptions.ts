export default class PaginationOptions {
    total: number;
    page: number;
    sizePerPage: number;
    sortName?: string;
    sortOrder?: any;

    public static getDefault(): PaginationOptions {
        return {total: 0, page: 1, sizePerPage: 5};
    }
}