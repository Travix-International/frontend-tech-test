// import {
//     showNotification,
// } from '../actions/notification';

// Default base config for client.
const baseConfig = {
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
};

function constructQuery(obj) {
    let queryString = '';
    let i = 0;

    if (!obj || typeof obj !== 'object' || Object.keys(obj).length === 0) {
        return '';
    }

    Object.keys(obj).forEach((key) => {
        let param = '';

        if (obj[key] && typeof obj[key] === 'object' && obj[key].constructor === Array) {
            for (let j = 0; j < obj[key].length; ++j) {
                if (j) {
                    param = `${param}&${key}=${obj[key][j]}`;
                } else {
                    param = `${key}=${obj[key][j]}`;
                }
            }
        } else {
            param = `${key}=${obj[key]}`;
        }

        queryString = i++ ? `${queryString}&${param}` : param;
    });
    return queryString;
}

/**
 * Class for making API calls.
 */
class ApiUtil {

    get(config, req) {
        return this.request({
            ...baseConfig,
            ...config,
            method: 'GET'
        }, null, req);
    }

    post(config, body, req) {
        const reqBody = typeof body === 'string' ? body : JSON.stringify(body);
        return this.request({
            ...baseConfig,
            ...config,
            method: 'POST'
        }, reqBody, req);
    }

    put(config, body, req) {
        const reqBody = typeof body === 'string' ? body : JSON.stringify(body);
        return this.request({
            ...baseConfig,
            ...config,
            method: 'PUT'
        }, reqBody, req);
    }

    delete(config, body, req) {
        const reqBody = typeof body === 'string' ? body : JSON.stringify(body);
        return this.request({
            ...baseConfig,
            ...config,
            method: 'DELETE'
        }, reqBody, req);
    }


    /**
     * Constructs the URL out of the given config.
     *
     * @param  {Object} config The call config.
     * @return {String}        The URL
     */
    formatUrl(config) {
        let queryString = '';
        if (config.query) {
            queryString = constructQuery(config.query);
        }

        if (queryString) {
            queryString = `?${queryString}`;
        }

        let configPath = config.url;

        const protocol = 'http';
        const host = 'localhost';
        const portString = '9001';
        const path = configPath || (config.path ? config.path : '');

        return `${protocol}://${host}:${portString}${path}${queryString}`;
    }

    /**
     * Makes a request.
     *
     * @param  {Object} config  The call config.
     * @param  {Object} reqBody The request body.
     * @param  {Object} req     The request object.
     *
     * @return {Promise}         A promise that resolves/rejects once the
     *                             call is done.
     */
    request(config, reqBody, req) {

        const accepts = typeof config.accepts !== 'undefined'
            ? config.accepts
            : 'json';
        const extracts = [
            'method',
            'headers',
            'body',
            'referrer',
            'mode',
            'credentials',
            'cache',
            'redirect',
            'integrity',
            'window'
        ];

        const fetchOptions = {};

        extracts.forEach(key => {
            if (typeof config[key] !== 'undefined') {
                fetchOptions[key] = config[key];
            }
        });

        if (reqBody) {
            if (typeof reqBody === 'string') {
                fetchOptions.headers = {
                    ...fetchOptions.headers,
                    'Content-Type': 'application/json; charset=utf-8'
                };
            }
            fetchOptions.body = reqBody;
        } else {
            fetchOptions.body = typeof fetchOptions.body === 'string' ?
                fetchOptions.body : JSON.stringify(fetchOptions.body);
        }

        const getResult = (response) => {
            let result = null;
            const contentType = response.headers && response.headers.get('Content-Type');
            if (accepts === 'json' && contentType && contentType.startsWith('application/json')) {
                return response.text().then(res => {
                    try {
                        return JSON.parse(res);
                    } catch (e) {
                        return res;
                    }
                });
            } else if (accepts === 'blob') {
                result = response.blob();
            } else {
                result = response.text();
            }

            return result;
        };

        return fetch(this.formatUrl(config), fetchOptions)
            .then(response => {
                const result = getResult(response);
                if (response.ok) {
                    return result;
                }

                return result && result.then
                    ? result.then(res => Promise.reject({ output: res, response }))
                    : result;
            }, response => {
                const result = getResult(response);

                return Promise.reject({ output: result, response });
            }).then(result => {
                return result;
            }, result => {
                return Promise.reject(result.output);
            });
    }
}

export default new ApiUtil();

export {
    baseConfig
};
