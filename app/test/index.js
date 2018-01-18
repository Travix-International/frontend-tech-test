import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { expect } from 'chai';

import Task from '../components/Task';

// const { JSDOM } = require('jsdom');
//
// const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
// const { window } = jsdom;
//
// global.window = window;
// global.document = window.document;
// global.navigator = {
//   userAgent: 'node.js',
// };
//
Enzyme.configure({ adapter: new Adapter() });

const initialState = {
  tasks: {
    status: 'invalid',
    data: [],
    error: null,
  },
};

const mockStore = configureStore();
let store;

describe('<Task />', () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('renders title and description', () => {
    const wrapper = render(<Task
      completed={false}
      description="This is the description of the task"
      id={1}
      store={store}
      title="Test task"
    />);

    expect(wrapper.find('.title').html()).to.equal('Test task');
    expect(wrapper.find('.description').html()).to.equal('This is the description of the task');
  });

  // it('has state', () => {
  //   const wrapper = mount(<Task
  //     completed={false}
  //     description="This is the description of the task"
  //     id={1}
  //     store={store}
  //     title="Test task"
  //   />);
  //
  //   expect(wrapper.props().completed).to.equal(false);
  //   wrapper.find('.toggle-completed').simulate('click');
  //   expect(wrapper.props().completed).to.equal(true);
  //
  //   // expect(wrapper.find('.title').html()).to.equal('Test task');
  //   // expect(wrapper.find('.description').html()).to.equal('This is the description of the task');
  // });
});
