import React from 'react';
import '../enzyme_setup';
import  { shallow, mount } from 'enzyme';
import Todo from '../../../src/components/Todo';

describe('<Todo />', function(){

  it('shold be defined', function(){
    expect(Todo).to.exits;
  });

  it('should render a div with .todo as a container', function () {
    const wrapper = shallow(<Todo id={1} title={'hello'} description={'world'} complete={false} dispatch={()=>{}} />);
    expect(wrapper.find('.todo')).to.have.length(1);
  });

  it('should execute componentWillUnMount when comonent destroy', function () {
    let spyUnmount = sinon.spy(Todo.prototype, 'componentWillUnmount');
    const wrapper = shallow(<Todo id={1} title={'hello'} description={'world'} complete={false} dispatch={(obj)=> obj} />);
    wrapper.unmount();
    expect(spyUnmount.calledOnce).to.be.equal(true);
  });

  it('should change todo complete state when click check icon', function () {
   const wrapper = mount(<Todo id={1} title={'hello'} description={'world'} complete={false} dispatch={(obj)=> obj} />);
    wrapper.find('.todo-complete').simulate('click');
    expect(wrapper.state().complete).to.be.equal(true);
    wrapper.find('.todo-complete').simulate('click');
    expect(wrapper.state().complete).to.be.equal(false);
  });

  it('should change todo color adding css class on click color icons', function(){
    const wrapper = mount(<Todo id={1} title={'hello'} description={'world'} complete={false} dispatch={(obj)=> obj} />);
    wrapper.find('.todo-colors .yellow').simulate('click');
    expect(wrapper.state().color).to.equal(1);
    wrapper.find('.todo-colors .blue').simulate('click');
    expect(wrapper.state().color).to.equal(2);
    wrapper.find('.todo-colors .purple').simulate('click');
    expect(wrapper.state().color).to.equal(3);
  });

  it('should execute removeTodo when click on todo-delete icon', function(){
    const spyRemove = sinon.spy(Todo.prototype, 'removeTodo');
    const wrapper = mount(<Todo id={1} title={'hello'} description={'world'} complete={false} dispatch={(obj)=> obj} />);
    wrapper.find('.todo-delete').simulate('click');
    expect(spyRemove.calledOnce).to.be.equal(true);
  });

  it('should execute saveTodo when blur description textarea', function(){
    const spySaveDesc = sinon.spy(Todo.prototype, 'saveTodo');
    const wrapper = mount(<Todo id={1} title={'hello'} description={'world'} complete={false} dispatch={(obj)=> obj} />);
    wrapper.find('.todo-description').simulate('blur');
    wrapper.find('.todo-title').simulate('blur');
    expect(spySaveDesc.callCount).to.be.equal(2);
  });

  it('should update state when field state when changes', function(){
    const wrapper = mount(<Todo id={1} title={'hello'} description={'world'} complete={false} dispatch={(obj)=> obj} />);
    wrapper.find('.todo-description').simulate('change');
    expect(wrapper.find('.todo-description').text()).to.be.equal(wrapper.state().description);
  })
});
