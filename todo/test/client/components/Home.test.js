import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Home from '../../../app/components/Home/Home';
import { Nav } from '../../../app/components/Nav/Nav';
import { Todo } from '../../../app/components/Todo/Todo';
import { TodoModal } from '../../../app/components/TodoModal/TodoModal';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const tasks = [
  {
    "id": 0,
    "title": "Task 0",
    "description": "Some Task description"
  },
  {
    "id": 1,
    "title": "Task 1",
    "description": "Some Task description"
  },
  {
    "id": 2,
    "title": "Task 2",
    "description": "Some Task description"
  }
]

describe('Home component', () => {

  const component = shallow(<Home store={mockStore({ todos: {tasks: tasks} })}/>).shallow();

  it('contains Nav component', () => {
    expect(component.find(Nav)).to.have.length(1);
  });

  it('contains Next button', () => {
    expect(component.containsMatchingElement(
      <button type="button" className="btn btn-default">next</button>
    )).to.equal(true);
  });

  it('contains Previous button', () => {
    expect(component.containsMatchingElement(
      <button type="button" className="btn btn-default">previous</button>
    )).to.equal(true);
  });

  it('contains Todo component', () => {
    expect(component.find(Todo)).to.have.length(3);
  });

  it('doesn not contains TodoModal component when state is not set', () => {
    component.setState({
      showModal: false
    })
    expect(component.find(TodoModal)).to.have.length(0);
  });

  it('contains TodoModal component when state is set', () => {
    component.setState({
      showModal: true
    })
    expect(component.find(TodoModal)).to.have.length(1);
  });
  
});
