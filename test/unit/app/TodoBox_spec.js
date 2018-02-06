import React from 'react';
import '../enzyme_setup';
import  { shallow } from 'enzyme';
import TodoBox from '../../../src/components/TodoBox';

describe('<TodoBox />', function(){
  it('should be defined', function(){
    expect(TodoBox).to.exits;
  });

  it('shoud render a div with class .todo-box', function(){
    const wrapper = shallow(<TodoBox todos={[]} dispatch={(fun) => fun} />);
    expect(wrapper.find('.todo-box')).to.have.length(1);
  });

  it('should execute componentWillMount', function(){
    const spyWillmount = sinon.spy(TodoBox.prototype, 'componentWillMount');
    const wrapper = shallow(<TodoBox todos={[{id:1, title:'a', description: 'b', complete:false}]} dispatch={(fun) => fun} />);
    expect(spyWillmount.calledOnce).to.be.equal(true);
  });
});