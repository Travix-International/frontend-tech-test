import ApiUtils from '../helpers/ApiUtils';
import { BACKEND_HOST_MAIN } from '../constants/api.constants';
import { PaginatedListResult } from '../app/viewModels';

function getRoot() {
    return `${BACKEND_HOST_MAIN}api/task`;
}

export default class TaskApi {

    public static getList(params: any): Promise<PaginatedListResult<any>> {
        return ApiUtils.handleGet<PaginatedListResult<any>>(`${getRoot()}`, {...params});
    }

    public static getSingle(id: number): Promise<any | null> {
        return ApiUtils.handleGet<any>(`${getRoot()}/${id}`);
    }

    public static add(formValues: any) {
        return ApiUtils.handlePost<number>(`${getRoot()}`, formValues);
    }

    public static update(id: number, formValues: any) {
        return ApiUtils.handlePut<boolean>(`${getRoot()}/${id}`, formValues);
    }

    public static remove(id: number) {
        return ApiUtils.handleDelete(`${getRoot()}/${id}`);
    }
}