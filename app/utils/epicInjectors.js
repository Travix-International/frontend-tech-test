import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';
import invariant from 'invariant';
import conformsTo from 'lodash/conformsTo';

import checkStore from './checkStore';

const checkKey = key => invariant(
  isString(key) && !isEmpty(key),
  '(app/utils...) injectEpic: Expected `key` to be a non empty string'
);

const checkDescriptor = descriptor => {
  const shape = {
    epic: isFunction
  };
  invariant(
    conformsTo(descriptor, shape),
    '(app/utils...) injectEpic: Expected a valid epic descriptor'
  );
};

export function injectEpicFactory(store, isValid) {
  return (key, descriptor = {}) => {
    if (!isValid) checkStore(store);

    const newDescriptor = { ...descriptor };
    const { epic } = newDescriptor;

    checkKey(key);
    checkDescriptor(newDescriptor);

    const hasEpics = Reflect.has(store.injectedEpics, key);

    if (!hasEpics) {
      store.epic$.next(epic);

      store.injectedEpics[key] = { ...newDescriptor }; // eslint-disable-line no-param-reassign
    }
  };
}

export default function getInjectors(store) {
  checkStore(store);

  return {
    injectEpic: injectEpicFactory(store, true)
  };
}
