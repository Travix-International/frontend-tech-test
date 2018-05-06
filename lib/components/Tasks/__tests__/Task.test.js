import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { tasks } from '../../../__seed__/tasks';
import Task from '../Task';

const { _id, title, description, isComplete } = tasks[0];
const testProps = {
  _id,
  description,
  isComplete,
  title
};

describe('Task', () => {
  let wrapper;
  const mockOnToggleFn = jest.fn();
  const mockOnRemoveFn = jest.fn();
  const mockOnEditFn = jest.fn();

  const TaskComponent = (
    <Task
      {...testProps}
      onEdit={mockOnEditFn}
      onRemove={mockOnRemoveFn}
      onToggle={mockOnToggleFn}
    />
  );

  beforeEach(() => {
    wrapper = shallow(TaskComponent);
  });

  it('renders correctly', () => {
    const tree = renderer.create(TaskComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('toggle completion status when checkbox is checked/unchecked', () => {
    wrapper
      .find(`#todo-${testProps._id}`)
      .simulate('change', { target: { checked: true } });
    expect(mockOnToggleFn).toBeCalled();
  });

  it('call edit function when `edit` button is clicked', () => {
    wrapper.find('.edit').simulate('click');
    expect(mockOnEditFn).toBeCalled();
  });

  it('call delete function when `delete` button is clicked', () => {
    wrapper.find('.delete').simulate('click');
    expect(mockOnRemoveFn).toBeCalled();
  });
});
