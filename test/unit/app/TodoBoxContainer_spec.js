import '../enzyme_setup';
import React from 'react';
import { shallow } from 'enzyme';
import thunk from "redux-thunk";
import configureMockStore from 'redux-mock-store';
import TodoBoxContainer from '../../../src/containers/TodoBoxContainer';

describe('<TodoBoxContainer />', function () {
  const middlewares = [ thunk ]
  let mockStore = configureMockStore(middlewares);
  let store;

  beforeEach(function(){
    store = mockStore({
      todo: {
        todoList: [],
        sending: false,
        error: null
      }
    });
  });

  it('should be defined', function(){
    expect(TodoBoxContainer).to.exist;
  });

  it('should succesfully render', function(){
    let context = { store };
    const wrapper = shallow(<TodoBoxContainer />, {context});
    expect(wrapper.dive().find('.todo-box')).to.have.length(1);
  });
});
