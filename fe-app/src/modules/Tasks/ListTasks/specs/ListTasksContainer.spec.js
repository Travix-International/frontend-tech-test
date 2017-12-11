import React from 'react';
import { shallow } from 'enzyme';
import { ListTasksContainer } from '../ListTasksContainer';

describe('ListTasksContainer', () => {
  let defaultProps;
  let wrapper;
  let listTasksSpy;
  let deleteTaskSpy;

  beforeEach(() => {
    listTasksSpy = jest.fn();
    deleteTaskSpy = jest.fn();
    defaultProps = {
      actions: { listTasks: listTasksSpy },
      deleteActions: { deleteTask: deleteTaskSpy },
      tasks: [{ foo: 'bar' }],
    };
    wrapper = shallow(<ListTasksContainer {...defaultProps} />);
  });
  describe('componentDidMount', () => {
    test('should load tasks data', () => {
      wrapper.instance().componentDidMount();

      expect(listTasksSpy).toHaveBeenCalled();
    });
  });
  describe('onDeleteTask', () => {
    test('should delete selected item', () => {
      wrapper.instance().onDeleteTask('1');

      expect(deleteTaskSpy).toHaveBeenCalled();
    });
  });
  describe('render', () => {
    let component;
    let onDeleteTaskSpy;

    beforeEach(() => {
      jest.resetAllMocks();
      onDeleteTaskSpy = jest.spyOn(
        ListTasksContainer.prototype, 'onDeleteTask'
      );
      wrapper = shallow(<ListTasksContainer {... defaultProps} />);
      component = wrapper.find('ListTasksComponent');
    });
    test('should render component with props', () => {
      expect(component.exists()).toBe(true);
      expect(component.props().tasks).toEqual([{ foo: 'bar' }]);
    });
    test('should have a event prop for onDelete', () => {
      component.simulate('delete');
      expect(onDeleteTaskSpy).toHaveBeenCalled();
    });
  });
});
