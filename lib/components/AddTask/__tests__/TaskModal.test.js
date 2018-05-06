import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { TaskModal } from '../TaskModal';
import * as tasksSeed from '../../../__seed__/tasks';

const testProps = {
  actions: {},
  addModal: true,
  editModal: null,
  tasks: tasksSeed.tasks
};

describe('TaskModal', () => {
  const mockUpdateTaskFn = jest.fn();
  const mockCreateTaskFn = jest.fn();
  const mockToggleAddModalFn = jest.fn();
  const mockToggleEditModalFn = jest.fn();

  testProps.actions.updateTask = mockUpdateTaskFn;
  testProps.actions.createTask = mockCreateTaskFn;
  testProps.actions.toggleAddModal = mockToggleAddModalFn;
  testProps.actions.toggleEditModal = mockToggleEditModalFn;

  it('renders correctly', () => {
    const tree = renderer.create(<TaskModal {...testProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls create task function when Add Task form is submitted', () => {
    const wrapper = mount(<TaskModal {...testProps} />);
    const task = { title: 'Task 1', description: 'A brief description' };
    wrapper.find('#todo-text').instance().value = task.title;
    wrapper.find('#todo-description').instance().value = task.description;
    wrapper
      .find('form')
      .first()
      .simulate('submit');
    expect(mockCreateTaskFn).toBeCalled();
    expect(mockCreateTaskFn).toBeCalledWith(task);
  });

  it('calls update task function when Add Task form is submitted with an editModal _id passed in props', () => {
    const props = { ...testProps, editModal: testProps.tasks[0]._id };
    const wrapper = mount(<TaskModal {...props} />);
    const updatedTitle = 'Task 2';
    wrapper.find('#todo-text').instance().value = updatedTitle;
    wrapper
      .find('form')
      .first()
      .simulate('submit');
    expect(mockUpdateTaskFn).toBeCalled();
    expect(mockUpdateTaskFn).toBeCalledWith(testProps.tasks[0]._id, {
      description: testProps.tasks[0].description,
      title: updatedTitle
    });
  });
});
