/* global expect, it, describe */

import React from 'react';
import { shallow } from 'enzyme';
import { Checkbox, Button } from 'travix-ui-kit';

import TodoItem from '../../../src/javascript/components/TodoItem';

const mockComponent = () => {
  const props = {
    todo: {
      id: 0,
      title: 'Todo title',
      description: 'Todo description',
      completed: false,
    },
    editTodoTitle: jest.fn(),
    editTodoDescription: jest.fn(),
    deleteTodo: jest.fn(),
    toggleTodo: jest.fn(),
  };

  const shallowComponent = shallow(<TodoItem {...props} />);

  return {
    props,
    shallowComponent,
  };
};

describe('TodoItem component behaviour', () => {
  it('Should render successfully', () => {
    const { shallowComponent } = mockComponent();

    expect(shallowComponent.type()).toBe('li');

    const div = shallowComponent.props().children;

    const [innerDivCheckbox, innerDivText, button] = div.props.children;

    const checkbox = innerDivCheckbox.props.children;
    const title = innerDivText.props.children[0];
    const description = innerDivText.props.children[1];

    expect(checkbox.type).toBe(Checkbox);
    expect(checkbox.props.checked).toBe(false);

    expect(title.type).toBe('p');
    expect(title.props.children).toBe('Todo title');

    expect(description.type).toBe('p');
    expect(description.props.children).toBe('Todo description');

    expect(button.type).toBe(Button);
  });

  it('Checkbox onChange should call toggleTodo ', () => {
    const { shallowComponent, props } = mockComponent();
    const checkbox = shallowComponent.props().children.props.children[0].props.children;
    checkbox.props.onChange();
    expect(props.toggleTodo.mock.calls.length).toBe(1);
  });

  it('Button onClick should call deleteTodo ', () => {
    const { shallowComponent, props } = mockComponent();
    const button = shallowComponent.props().children.props.children[3];
    button.props.onClick();
    expect(props.deleteTodo.mock.calls.length).toBe(1);
  });

  it('Edit button onClick should enable editing state', () => {
    const { shallowComponent } = mockComponent();
    const title = shallowComponent.props().children.props.children[2];
    title.props.onClick();
    expect(shallowComponent.state().editing).toBe(true);
  });

  it('todoTitleInput onBlur should call editTodoTitle', () => {
    const { shallowComponent, props } = mockComponent(true);
    shallowComponent.setState({ editing: true });

    const todoTitleInput = shallowComponent.props().children.props.children[0];

    todoTitleInput.props.onBlur({ target: { value: 'Todo title' } });
    expect(props.editTodoTitle.mock.calls.length).toBe(1);
  });

  it('todoDescriptionInput onBlur should call editTodoDescription', () => {
    const { shallowComponent, props } = mockComponent(true);
    shallowComponent.setState({ editing: true });

    const todoDescriptionInput = shallowComponent.props().children.props.children[1];

    todoDescriptionInput.props.onBlur({ target: { value: 'Todo description' } });
    expect(props.editTodoDescription.mock.calls.length).toBe(1);
  });

  it('todoTitleInput onBlur should call deleteTodo if text is empty', () => {
    const { shallowComponent, props } = mockComponent(true);
    shallowComponent.setState({ editing: true });

    const todoTitleInput = shallowComponent.props().children.props.children[0];

    todoTitleInput.props.onBlur({ target: { value: '' } });
    expect(props.deleteTodo.mock.calls.length).toBe(1);
  });

  it('todoTitleInput onBlur should call leave editing state', (done) => {
    const { shallowComponent, props } = mockComponent(true);
    shallowComponent.setState({ editing: true });

    const todoTitleInput = shallowComponent.props().children.props.children[0];

    todoTitleInput.props.onBlur({ target: { value: 'Todo title' } });
    expect(props.editTodoTitle.mock.calls.length).toBe(1);

    jest.useFakeTimers();
    setTimeout(() => {
      expect(shallowComponent.state().editing).toBe(true);
      done();
    }, 1000);
    jest.runAllTimers();
  });
});
