import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import Main from './../../components/Main';
import { ListItem } from 'react-toolbox/lib/list';
import testStore from './../../testState';
import { getItems } from './../../store/actions/actions';

const mockStore = configureMockStore([createSagaMiddleware()]);
jest.mock('./../../store/actions/actions');

describe('Test Detail component', () => {
  const store = mockStore(testStore);
  getItems.mockImplementation();
  const wrapper = shallow(<Main store={store} />);
  const mounted = mount(<Main store={store} getItems={getItems}/>);

  test('Main page should be rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should show 2 list items', () => {
    expect(mounted).toMatchSnapshot();
  });
});