import { IServiceCallConfig } from "../interfaces/interface";
export const SUCCESS_CODES = [200, 204, 201];
import { BASE_URL } from "./api_urls";
class ServiceCall {
    makeServiceCall = (url, method, payload = null) => {
        url = BASE_URL + url;
        let headersObj = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
        let headers = new Headers(headersObj);
        let reqConfig = { method, payload }
        return new Promise((resolve, reject) => {
            if (!navigator.onLine) {
                reject({
                    data: {},
                    message: 'User is offline.'
                })
            }
            return fetch(url, reqConfig as any)
                .then((response) => response.status === 204 ? { message: '', status: 204 } : response.json())

                .then((resObj) => resolve(resObj))
                .catch((err) => console.log(err))
        })

    }
}
const service_call = new ServiceCall();
export default service_call;