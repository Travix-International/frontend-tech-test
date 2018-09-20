import request from 'request';

const baseRequest = request.defaults({
    headers: {
        Accept: 'application/json',
    },
    json: true,
});

/**
 * Returns promise for base request
 *
 * @param {Object} requestParams
 */

export const getPromise = (requestParams) => {
    return new Promise((resolve, reject) => {
        baseRequest(
            requestParams,
            (error, response, body) => {
                (error || response.statusCode >= 400) ? reject({error, response, body}) : resolve({error, response, body});
            }
        );
    });
};