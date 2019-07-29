import expect from 'expect';
import * as reduxFetch from 'utils/reduxFetch';

function validate(actions, expectedActions) {
    if (typeof actions === 'function') {
        expect(expectedActions).toBeA('function');
    } else {
        expect(actions).toEqual(expectedActions);
    }
}
function validateActions(spyFunction, initAction, successAction, failedAction) {
     /** test init Action */
    if (initAction instanceof Array) {
        spyFunction.calls[0].arguments[1].forEach((action, i) => {
            validate(action, initAction[i]);
        });
    } else {
        validate(spyFunction.calls[0].arguments[1], initAction);
    }

    /** test success Action */
    if (successAction instanceof Array) {
        spyFunction.calls[0].arguments[2].forEach((action, i) => {
            validate(action, successAction[i]);
        });
    } else {
        validate(spyFunction.calls[0].arguments[2], successAction);
    }

    /** test success Action */
    if (failedAction instanceof Array) {
        spyFunction.calls[0].arguments[3].forEach((action, i) => {
            validate(action, failedAction[i]);
        });
    } else {
        validate(spyFunction.calls[0].arguments[3], failedAction);
    }
}
/**
 * [testReduxPost tests reduxPost, Extends the expect]
 * @param  {[type]} spyFunction [reduxPost from reduxFetch]
 * @param  {[type]} apiMeta     [to tests reduxtPost first argument which has url,body]
 * @return {[type]}             [undefined]
 */
expect.extend({
    testReduxPost(spyFunction, initAction, successAction, failedAction) {
        /** called atleast one */
        expect(spyFunction).toHaveBeenCalled();
        /** total aregument should 5 */
        expect(spyFunction.calls[0].arguments.length).toEqual(5);
         /** test passed parameters*/
        expect(spyFunction.calls[0].arguments[0]).toEqual(this.actual);

        validateActions(spyFunction, initAction, successAction, failedAction);

         /** last aregument should be funtion */
        expect(spyFunction.calls[0].arguments[4]).toBeA('function');
    },
});

expect.extend({
    spyOnReduxPost() {
        /** called atleast one */
        return expect.spyOn(reduxFetch, 'reduxPost');
    }
});

/**
 * [testReduxPut tests reduxPut, Extends the expect]
 * @param  {[type]} spyFunction [reduxPut from reduxFetch]
 * @param  {[type]} apiMeta     [to tests reduxtPut first argument which has url]
 * @return {[type]}             [undefined]
 */
expect.extend({
    testReduxPut(spyFunction, initAction, successAction, failedAction) {
        /** called atleast one */
        expect(spyFunction).toHaveBeenCalled();
        /** total aregument should 5 */
        expect(spyFunction.calls[0].arguments.length).toEqual(5);
         /** test passed parameters*/
        expect(spyFunction.calls[0].arguments[0]).toEqual(this.actual);

        validateActions(spyFunction, initAction, successAction, failedAction);
         /** last aregument should be funtion */
        expect(spyFunction.calls[0].arguments[4]).toBeA('function');
    },
});

/**
 * [testReduxDelete tests reduxDelete, Extends the expect]
 * @param  {[type]} spyFunction [reduxDelete from reduxFetch]
 * @param  {[type]} apiMeta     [to tests reduxtDelete first argument which has url]
 * @return {[type]}             [undefined]
 */
expect.extend({
    testReduxDelete(spyFunction, initAction, successAction, failedAction) {
        /** called atleast one */
        expect(spyFunction).toHaveBeenCalled();
        /** total aregument should 5 */
        expect(spyFunction.calls[0].arguments.length).toEqual(5);
         /** test passed parameters*/
        expect(spyFunction.calls[0].arguments[0]).toEqual(this.actual);

        validateActions(spyFunction, initAction, successAction, failedAction);
        /** last aregument should be funtion */

        expect(spyFunction.calls[0].arguments[4]).toBeA('function');
    },
});

/**
 * [testReduxDelete tests reduxDelete, Extends the expect]
 * @param  {[type]} spyFunction [reduxDelete from reduxFetch]
 * @param  {[type]} apiMeta     [to tests reduxtDelete first argument which has url]
 * @return {[type]}             [undefined]
 */
expect.extend({
    testReduxDelete(spyFunction, initAction, successAction, failedAction) {
        /** called atleast one */
        expect(spyFunction).toHaveBeenCalled();
        /** total aregument should 5 */
        expect(spyFunction.calls[0].arguments.length).toEqual(5);
         /** test passed parameters*/
        expect(spyFunction.calls[0].arguments[0]).toEqual(this.actual);

        validateActions(spyFunction, initAction, successAction, failedAction);
         /** last aregument should be funtion */
        expect(spyFunction.calls[0].arguments[4]).toBeA('function');
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

/**
 * [testReduxGet tests reduxGet, Extends the expect]
 * @param  {[type]} spyFunction [reduxGet from reduxFetch]
 * @param  {[type]} apiMeta     [to tests reduxtGet first argument which has url]
 * @return {[type]}             [undefined]
 */
expect.extend({
    testReduxGet(spyFunction, initAction, successAction, failedAction) {
        /** called atleast one */
        expect(spyFunction).toHaveBeenCalled();
        /** total aregument should 5 */
        expect(spyFunction.calls[0].arguments.length).toEqual(5);
         /** test passed parameters*/
        expect(spyFunction.calls[0].arguments[0]).toEqual(this.actual);
        /** test init Action */

        validateActions(spyFunction, initAction, successAction, failedAction);
         /** last aregument should be funtion */
        expect(spyFunction.calls[0].arguments[4]).toBeA('function');
    },
});

expect.extend({
    spyOnReduxGet() {
        /** called atleast one */
        return expect.spyOn(reduxFetch, 'reduxGet');
    }
});
