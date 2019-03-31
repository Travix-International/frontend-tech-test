
import axios from 'axios';

type Dict = {
    [key: string]: string;
};

const errorMsg: Dict = {
    401: 'Fail to authenticate user. Please login and try again.',
    403: 'Sorry, you don\'t have the permission to access this resource.',
    404: 'The resource you are looking for is gone',
    500: 'Server is not feeling well',
};

const client = axios.create({
    baseURL: 'http://localhost:9001', // better put in local .env file
});

const request = (url: string, options: object = {}) => {
    const defaultOptions = {
        Accept: 'application/json',
        // e.g. include credentials in the header
    };

    const newOptions: any = {
        url,
        ...defaultOptions,
        ...options,
    };

    if(['POST', 'PUT', 'DELETE'].includes(newOptions.method) && !(newOptions.body instanceof FormData)) {
        newOptions.headers = {
            'Content-Type': 'application/json; charset=utf-8',
        };
    }

    return client(newOptions)
    .then(res => res.data || res)
    .catch(err => {
        const code = err.response && err.response.status;
        // handle error
        // e.g. giving ui feedback or redirect
        console.log(`${code}: ${errorMsg[code]}`);
        // wrap error
        const error = new Error(errorMsg[code]);
        throw(error);
    });
};

export default request;