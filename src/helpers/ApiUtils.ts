import axios, {AxiosError, AxiosPromise, AxiosRequestConfig, AxiosResponse} from 'axios';

export default class ApiUtils {
    public static async handleGet<T>(URL: string, params: Object | null = null): Promise<T> {
        const config: AxiosRequestConfig = {
            headers: { 'Content-Type': 'application/json' },
            params: params,
            responseType: 'json'
        };

        return await ApiUtils.handleApi(axios.get<T>(URL, config));
    }

    public static async handlePost<T>(URL: string, data: object): Promise<T> {
        const config: AxiosRequestConfig = {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            responseType: 'json'
        };
        const stringifiedData = data ? JSON.stringify(data) : null;

        return await ApiUtils.handleApi(axios.post<T>(URL, stringifiedData, config));
    }

    public static async handlePut<T>(URL: string, data: object | null): Promise<T> {
        const config: AxiosRequestConfig = {
            headers: { 'Content-Type': 'application/json' },
            method: 'PUT',
            responseType: 'json'
        };
        const stringifiedData = data ? JSON.stringify(data) : null;

        return await ApiUtils.handleApi(axios.put<T>(URL, stringifiedData, config));
    }

    public static async handleDelete(URL: string, data: any|null = null): Promise<boolean> {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            method: 'DELETE',
            responseType: 'json'
        };

        return await ApiUtils.handleApi(axios.delete(URL, config));
    }

    public static async handleApi<T>(promise: AxiosPromise<T>, throwT: boolean = false): Promise<T> {
        return promise
            .then(function onFulfilled(value: AxiosResponse<T>): T {
                return value.data;
            })
            .catch(function onRejected(error: AxiosError) {
                if (error.response) {
                    if (throwT && error.response.data) {
                        throw error.response.data;
                    } else {
                        throw 'Request failed. Code ' + (error.response.status || 'unknown');
                    }
                } else if (error.request) {
                    throw 'No response was received';
                } else {
                    throw error.message;
                }
            });

    }

}