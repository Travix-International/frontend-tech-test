import React from 'react';
import '../enzyme_setup';
import  { shallow, mount } from 'enzyme';
import TodoForm from '../../../src/components/TodoForm';

describe('<TodoForm />', function(){
  it('should be defined', function(){
    expect(TodoForm).to.exits;
  });

  it('should render div with class .todo-form', function(){
    const wrapper = shallow(<TodoForm />, {store:{dispatch:(fun)=>fun}});
    expect(wrapper.find('.todo-form')).to.have.length(1);
  });

  it('should change state when user change inputs', function(){
    const spyChange = sinon.spy(TodoForm.prototype, 'updateState');
    const wrapper = mount(<TodoForm />);
    wrapper.find('.todo-form-title').simulate('change', { target: { value: 'Hello' } });
    expect(spyChange.calledOnce).to.be.equal(true);
    expect(wrapper.state().title).to.be.equal('Hello');
  });

  it('should execute saveTodo when click add button and reset state and inputs', function(){
    const spySave = sinon.spy(TodoForm.prototype, 'saveTodo');
    const wrapper = mount(<TodoForm />, {
      context: {store: {dispatch: (fun) => fun}}
    });
    wrapper.find('.todo-form-title').simulate('change', { target: { value: 'Hello' } });
    wrapper.find('.todo-form-description').simulate('change', { target: { value: 'world' } });
    wrapper.find('.todo-form-button').simulate('click');
    expect(spySave.calledOnce).to.be.equal(true);
    expect(wrapper.state().title).to.be.equal('');
    expect(wrapper.state().description).to.be.equal('');
  });
});