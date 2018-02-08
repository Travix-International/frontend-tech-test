import conformsTo from 'lodash/conformsTo';
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import invariant from 'invariant';

const checkStore = store => {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    epic$: isObject,
    injectedReducers: isObject,
    injectedEpics: isObject
  };

  invariant(
    conformsTo(store, shape),
    '(app/utils...) injectors: Expected a valid redux store'
  );
};

export default checkStore;
