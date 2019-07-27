import apiUtil from './apiUtil';

function dispatchAction(action, dispatch, payload, error) {
    if (Array.isArray(action)) {
        return Promise.all(action.map(a => dispatchAction(a, dispatch, payload, error)));
    } else if (action instanceof Function) {
        return dispatch(action(payload, error));
    }
    return dispatch({
        type: action,
        payload,
        error
    });
}

/**
 * This function dispatchs the INIT action and makes an API call.
 * Once the API call returns, it either dispatchs the SUCCESS action
 * or the FAILURE action.
 */
function reduxFetch(request, initAction, successAction, failAction, fetchFunc, dispatch) {
    dispatchAction(initAction, dispatch, null, null);
    return fetchFunc.call(apiUtil, request).then(
        payload => dispatchAction(successAction, dispatch, payload, null),
        error => dispatchAction(failAction, dispatch, null, error)
    );
}

/**
 * Wrapper to fetch using GET
 */
export function reduxGet(request, initAction, successAction, failAction, dispatch) {
    return reduxFetch(request, initAction, successAction, failAction, apiUtil.get, dispatch);
}

/**
 * Wrapper to fetch using POST
 */
export function reduxPost(request, initAction, successAction, failAction, dispatch) {
    return reduxFetch(request, initAction, successAction, failAction, apiUtil.post, dispatch);
}

/**
 * Wrapper to fetch using PUT
 */
export function reduxPut(request, initAction, successAction, failAction, dispatch) {
    return reduxFetch(request, initAction, successAction, failAction, apiUtil.put, dispatch);
}

/**
 * Wrapper to fetch using DELETE
 */
export function reduxDelete(request, initAction, successAction, failAction, dispatch) {
    return reduxFetch(request, initAction, successAction, failAction, apiUtil.delete, dispatch);
}
