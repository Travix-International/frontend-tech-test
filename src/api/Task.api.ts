import ApiUtils from '../helpers/ApiUtils';
import { BACKEND_HOST_MAIN } from '../constants/api.constants';
import { PaginatedListResult } from '../app/viewModels';

export class TaskDto {
    id: number;
    title: string;
    description: string;
}

export class MessageResponseDto {
    task?: TaskDto;
    message?: string;
}

export default class TaskApi {

    public static getList(params: any): Promise<PaginatedListResult<TaskDto>> {
        const url = `${BACKEND_HOST_MAIN}api/tasks`;
        return ApiUtils.handleGet<PaginatedListResult<TaskDto>>(url, {...params});
    }

    public static getSingle(id: number): Promise<MessageResponseDto | null> {
        return ApiUtils.handleGet<MessageResponseDto>(`${BACKEND_HOST_MAIN}api/task/${id}`);
    }

    public static add(formValues: any) { // TODO: make strongly-typed
        const title = formValues.title;
        const description = formValues.description;
        return ApiUtils.handlePost<MessageResponseDto>(`${BACKEND_HOST_MAIN}api/task/create/${title}/${description}`, {});
    }

    public static update(id: number, formValues: any) { // TODO: make strongly-typed
        const title = formValues.title;
        const description = formValues.description;
        return ApiUtils.handlePut<MessageResponseDto>(`${BACKEND_HOST_MAIN}api/task/update/${id}/${title}/${description}`, {});
    }

    public static remove(id: number) {
        return ApiUtils.handleDelete(`${BACKEND_HOST_MAIN}api/task/delete/${id}`);
    }
}