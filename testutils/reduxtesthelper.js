const expect = require('expect');
import configureMockStore from 'redux-mock-store';
import * as reduxFetch from 'utils/reduxHelper';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

function validate(actions, expectedActions) {
    if (typeof actions === 'function') {
        expect(actions).toBeA('function');
    } else {
        expect(actions).toEqual(Array.isArray(expectedActions) ? expectedActions[0] : expectedActions);
    }
}
function validateActions(spyFunction, initAction, successAction, failedAction) {
     /** test init Action */
    validate(spyFunction.calls[0].arguments[1], initAction);
    /** test success Action */
    validate(spyFunction.calls[0].arguments[2], successAction);

    /** test failed Action */
    validate(spyFunction.calls[0].arguments[3], failedAction);
}

expect.extend({
    testReduxGet(spyFunction, initAction, successAction, failedAction) {
        expect(spyFunction).toHaveBeenCalled();
        expect(spyFunction.calls[0].arguments.length).toEqual(5);
        expect(spyFunction.calls[0].arguments[0]).toEqual(this.actual);
        validateActions(spyFunction, initAction, successAction, failedAction);
    },
});

expect.extend({
    spyOnReduxGet() {
        /** called atleast one */
        return expect.spyOn(reduxFetch, 'reduxGet');
    }
});

expect.extend({
    testReduxPost(spyFunction, initAction, successAction, failedAction) {
        /** called atleast one */
        expect(spyFunction).toHaveBeenCalled();
        /** total aregument should 5 */
        expect(spyFunction.calls[0].arguments.length).toEqual(5);
         /** test passed parameters*/
        expect(spyFunction.calls[0].arguments[0]).toEqual(this.actual);

        validateActions(spyFunction, initAction, successAction, failedAction);
    },
});

expect.extend({
    spyOnReduxPost() {
        /** called atleast one */
        return expect.spyOn(reduxFetch, 'reduxPost');
    }
});

expect.extend({
    testReduxPut(spyFunction, initAction, successAction, failedAction) {
        /** called atleast one */
        expect(spyFunction).toHaveBeenCalled();
        /** total aregument should 5 */
        expect(spyFunction.calls[0].arguments.length).toEqual(5);
         /** test passed parameters*/
        expect(spyFunction.calls[0].arguments[0]).toEqual(this.actual);

        validateActions(spyFunction, initAction, successAction, failedAction);
    },
});

expect.extend({
    testReduxDelete(spyFunction, initAction, successAction, failedAction) {
        /** called atleast one */
        expect(spyFunction).toHaveBeenCalled();
        /** total aregument should 5 */
        expect(spyFunction.calls[0].arguments.length).toEqual(5);
         /** test passed parameters*/
        expect(spyFunction.calls[0].arguments[0]).toEqual(this.actual);

        validateActions(spyFunction, initAction, successAction, failedAction);
    },
});

expect.extend({
    testReduxDelete(spyFunction, initAction, successAction, failedAction) {
        /** called atleast one */
        expect(spyFunction).toHaveBeenCalled();
        /** total aregument should 5 */
        expect(spyFunction.calls[0].arguments.length).toEqual(5);
         /** test passed parameters*/
        expect(spyFunction.calls[0].arguments[0]).toEqual(this.actual);

        validateActions(spyFunction, initAction, successAction, failedAction);
    },
});

expect.extend({
    spyOnReduxPut() {
        /** called atleast one */
        return expect.spyOn(reduxFetch, 'reduxPut');
    }
});
expect.extend({
    spyOnReduxDelete() {
        /** called atleast one */
        return expect.spyOn(reduxFetch, 'reduxDelete');
    }
});

export function validateReduxGet(
    api,
    dispatchAction,
    initAction,
    successAction,
    failedAction,
    reduxStore
) {
    // Initialize store
    const store = reduxStore || mockStore({});
    const spyOnReduxGetObj = expect().spyOnReduxGet();
    store.dispatch(dispatchAction);
    expect(api).testReduxGet(spyOnReduxGetObj, initAction, successAction, failedAction);
    spyOnReduxGetObj.restore();
}

export function validateReduxPost(
    apiMeta,
    dispatchAction,
    initAction,
    successAction,
    failedAction,
    reduxStore
) {
    // Initialize store
    const store = reduxStore || mockStore({
        managaTab: []
    });
    const spyOnReduxPostObj = expect().spyOnReduxPost();
    store.dispatch(dispatchAction);
    expect(apiMeta).testReduxPost(spyOnReduxPostObj, initAction, successAction, failedAction);
    spyOnReduxPostObj.restore();
}

export function validateReduxPut(
    apiMeta,
    dispatchAction,
    initAction,
    successAction,
    failedAction,
    reduxStore
) {
    // Initialize store
    const store = reduxStore || mockStore({
        managaTab: []
    });
    const spyOnReduxPutObj = expect().spyOnReduxPut();
    store.dispatch(dispatchAction);
    expect(apiMeta).testReduxPut(spyOnReduxPutObj, initAction, successAction, failedAction);
    spyOnReduxPutObj.restore();
}

export function validateReduxDelete(
    apiMeta,
    dispatchAction,
    initAction,
    successAction,
    failedAction,
    reduxStore
) {
    // Initialize store
    const store = reduxStore || mockStore({
        managaTab: []
    });
    const spyOnReduxDeleteObj = expect().spyOnReduxDelete();
    store.dispatch(dispatchAction);
    expect(apiMeta).testReduxDelete(spyOnReduxDeleteObj, initAction, successAction, failedAction);
    spyOnReduxDeleteObj.restore();
}