import React from 'react';
import { shallow } from 'enzyme';
import Component from '.';

describe('<List />', () => {
  const deleteTodo = jest.fn();
  const editTodo = jest.fn();

  const renderWrapper = (isFetching, isEmpty, todos) => shallow(
    <Component
      deleteTodo={deleteTodo}
      editTodo={editTodo}
      isEmpty={isEmpty}
      isFetching={isFetching}
      todos={todos}
    />
  );

  it('should render a loading div', () => {
    const wrapper = renderWrapper(true, false, []);
    expect(wrapper.find('.loading')).toHaveLength(1);
  });

  it('should render an empty alert', () => {
    const wrapper = renderWrapper(false, true, []);
    expect(wrapper.find('.emptyList')).toHaveLength(1);
  });

  // React Virtualized Autosizer requires a real DOM to work
});
