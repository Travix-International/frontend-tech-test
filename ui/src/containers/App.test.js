import React from 'react';
import { createMockStore } from 'redux-test-utils';
import { mountWithStore } from '../utils/tests';
import App from './App';

describe('<App />', () => {
  const testState = { todos: { items: [] } };
  const store = createMockStore(testState);
  const wrapper = mountWithStore(<App />, store);

  it('should render an app div', () => {
    expect(wrapper.find('.app').length).toBe(1);
  });
});
