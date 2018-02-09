/* global expect, it, describe */

import React from 'react';
import { shallow } from 'enzyme';
import { Input, Button } from 'travix-ui-kit';

import TodoAdd from '../../../src/javascript/components/TodoAdd';

const mockComponent = () => {
  const props = {
    createTodo: jest.fn(),
    todosLeft: 0,
  };

  const shallowComponent = shallow(<TodoAdd {...props} />);

  return {
    props,
    shallowComponent,
  };
};

describe('TodoAdd component', () => {
  it('Should render successfully', () => {
    const { shallowComponent } = mockComponent();

    expect(shallowComponent.exists()).toEqual(true);
  });

  it('should render correctly', () => {
    const { shallowComponent } = mockComponent();

    expect(shallowComponent.type()).toBe('div');

    const [inputsContainer, , buttonSave] = shallowComponent.props().children;

    expect(inputsContainer.props.children[0].props.children[1].type).toBe(Input);
    expect(inputsContainer.props.children[1].props.children[1].type).toBe(Input);
    expect(buttonSave.props.children.type).toBe(Button);
  });

  it('should call createTodo if length of title text is greater than 0', () => {
    const { shallowComponent, props } = mockComponent();

    const [, , buttonSave] = shallowComponent.props().children;

    expect(props.createTodo.mock.calls.length).toBe(0);

    shallowComponent.setState({ title: 'Todo title' });

    buttonSave.props.children.props.onClick();
    expect(props.createTodo.mock.calls.length).toBe(1);
  });

  it('should call update state to displayTitleError if length of title text is less than 1', () => {
    const { shallowComponent } = mockComponent();

    const [, , buttonSave] = shallowComponent.props().children;

    buttonSave.props.children.props.onClick();
    expect(shallowComponent.state().displayTitleError).toBe(true);
  });
});
