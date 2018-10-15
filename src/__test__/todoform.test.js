import React from 'react';
import TodoForm from '../components/TodoForm';

describe('', () => {

  let props;
  let todoFormConfiguration = {
    selectedTaskId: null,
    selectedTask: null,
  };
  beforeEach(() => {
    props = {
      selectedTask: null,
    };
  });

  it('check for add button available', () => {
    let wrapper = mount(<TodoForm {...props} todoFormConfiguration={todoFormConfiguration} />);
    expect(wrapper.find('.title').length).toBe(1);
    const input = wrapper.find('.title');
    input.value = 'test';
    expect(input.value).toBe('test');
  });

  // it('test add functionality',()=>{

  // });



});