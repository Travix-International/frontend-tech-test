import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { List, ListItem, ListDivider } from 'react-toolbox/lib/list';
import Main from './../../components/Main';
import testStore from './../../testState';

describe('Test Detail component', () => {
  const mockStore = configureMockStore([createSagaMiddleware()]);
  const store = mockStore(testStore);
  const wrapper = shallow(<Main store={store} />);
  
  test('Main page should be rendered', () => {
    console.log(wrapper.html());
    expect(wrapper).toMatchSnapshot();
  });
  
  test('Should have 2 list items', () => {
    expect(wrapper.find('li').length).toBe(2);
  });
});