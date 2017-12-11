import React from 'react';
import { shallow } from 'enzyme';
import { ListTasksContainer } from '../ListTasksContainer';

describe('ListTasksContainer', () => {
  let defaultProps;
  let wrapper;
  let listTasksSpy;
  let deleteTaskSpy;
  let showEditModeSpy;

  beforeEach(() => {
    listTasksSpy = jest.fn();
    deleteTaskSpy = jest.fn();
    showEditModeSpy = jest.fn();
    defaultProps = {
      actions: {
        listTasks: listTasksSpy,
        showEditMode: showEditModeSpy,
      },
      deleteActions: { deleteTask: deleteTaskSpy },
      tasks: [{ foo: 'bar' }],
      totalPages: 100,
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
  describe('onEdit', () => {
    test('should edit selected item', () => {
      wrapper.instance().onEdit('1');

      expect(showEditModeSpy).toHaveBeenCalledWith(
        [{ foo: 'bar' }],
        '1',
      );
    });
  });
  describe('onPageChange', () => {
    test('should change page', () => {
      wrapper.instance().onPageChange({ selected: 1 });

      expect(listTasksSpy).toHaveBeenCalledWith(2);
    });
  });
  describe('render', () => {
    let component;
    let onDeleteTaskSpy;
    let onEditSpy;
    let onPageChangeSpy;

    beforeEach(() => {
      jest.resetAllMocks();
      onDeleteTaskSpy = jest.spyOn(
        ListTasksContainer.prototype, 'onDeleteTask'
      );
      onEditSpy = jest.spyOn(
        ListTasksContainer.prototype, 'onEdit'
      );
      onPageChangeSpy = jest.spyOn(
        ListTasksContainer.prototype, 'onPageChange'
      );
      wrapper = shallow(<ListTasksContainer {... defaultProps} />);
      component = wrapper.find('ListTasksComponent');
    });
    test('should render component with props', () => {
      expect(component.exists()).toBe(true);
      expect(component.props().tasks).toEqual([{ foo: 'bar' }]);
      expect(component.props().totalPages).toBe(100);
    });
    test('should have a event prop for onDelete', () => {
      component.simulate('delete');
      expect(onDeleteTaskSpy).toHaveBeenCalled();
    });
    test('should have a event prop for showEditMode', () => {
      component.simulate('edit');
      expect(onEditSpy).toHaveBeenCalled();
    });
    test('should have a event prop for onPageChange', () => {
      component.simulate('pageChange');
      expect(onPageChangeSpy).toHaveBeenCalled();
    });
  });
});
