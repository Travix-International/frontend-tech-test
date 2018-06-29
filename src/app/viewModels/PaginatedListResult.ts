export default class PaginatedListResult<TModel> {
    contextObjects: Array<TModel>;
    totalCount: number;
    pages: number;
}