import React from 'react';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import configureStore from '../store/configureStore';
import TodoList from '../components/TodoList';

const wrapper = shallow(<Provider store={store}>
    						<TodoList />
    					</Provider>);
const store = configureStore();

describe('(Component) TodoList', () => {
  it('renders without exploding', () => {
    expect(wrapper).to.have.length(1);
  });
});