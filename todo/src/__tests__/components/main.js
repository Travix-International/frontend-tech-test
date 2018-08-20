import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { List, ListItem } from 'react-toolbox/lib/list';
import { Button } from 'react-toolbox/lib/button';
import Main from './../../components/Main';
import testStore from './../testState';

describe('Test Detail component', () => {
  const mockStore = configureMockStore([createSagaMiddleware()]);
  const store = mockStore(testStore);
  
  test('Should have 2 list items', () => {
    const wrapper = mount(<Main store={store} />);
    expect(wrapper.find(List)).toHaveLength(1);
    expect(wrapper.find(ListItem)).toHaveLength(2);
  });
});