import PaginationOptions from "../../../viewModels/PaginationOptions";

export default class TaskSearchOptions extends PaginationOptions {
    title?: string;

    public static getDefault(): TaskSearchOptions {
        return {total: 0, page: 1, sizePerPage: 5};
    }
}