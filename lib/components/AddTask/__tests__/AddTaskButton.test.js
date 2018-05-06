import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { AddTaskButton } from '../AddTaskButton';

const testProps = {
  actions: {},
  showCompleted: true
};

describe('AddTaskButton', () => {
  let wrapper;
  const mockToggleShowCompletedFn = jest.fn();
  const mockToggleAddModalFn = jest.fn();

  testProps.actions.toggleShowCompleted = mockToggleShowCompletedFn;
  testProps.actions.toggleAddModal = mockToggleAddModalFn;

  const AddTaskButtonComponent = <AddTaskButton {...testProps} />;

  beforeEach(() => {
    wrapper = shallow(AddTaskButtonComponent);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<AddTaskButton {...testProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls toggle modal function when `Add Task` is clicked', () => {
    wrapper.find('.button').simulate('click');
    expect(mockToggleAddModalFn).toBeCalled();
  });

  it('toggles show completed tasks status when checkbox is checked/unchecked', () => {
    wrapper
      .find(`#show-completed`)
      .simulate('change', { target: { checked: false } });
    expect(mockToggleShowCompletedFn).toBeCalled();
  });
});
