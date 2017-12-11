import React from 'react';
import { shallow } from 'enzyme';
import { EditTasksContainer } from '../EditTasksContainer';

describe('EditTasksContainer', () => {
  let defaultProps;
  let wrapper;
  let viewTaskSpy;
  let editTaskSpy;

  beforeEach(() => {
    viewTaskSpy = jest.fn();
    editTaskSpy = jest.fn();
    defaultProps = {
      actions: {
        viewTask: viewTaskSpy,
        editTask: editTaskSpy,
      },
      isSubmitting: false,
      taskId: '1',
      task: {},
    };
    wrapper = shallow(<EditTasksContainer {...defaultProps} />);
  });
  describe('constructor', () => {
    test('should set initial state', () => {
      expect(wrapper.state('canSubmit')).toBe(false);
    });
  });
  describe('componentDidMount', () => {
    test('should load task data', () => {
      wrapper.instance().componentDidMount();

      expect(viewTaskSpy).toHaveBeenCalled();
    });
  });
  describe('onDisable', () => {
    test('should set canSubmit state: false', () => {
      wrapper.setState({ canSubmit: false });
      wrapper.instance().onDisable();
      expect(wrapper.state('canSubmit')).toBe(false);
    });
  });
  describe('onEnable', () => {
    test('should set canSubmit state: true', () => {
      wrapper.setState({ canSubmit: true });
      wrapper.instance().onEnable();
      expect(wrapper.state('canSubmit')).toBe(true);
    });
  });
  describe('onUpdate', () => {
    test('should parse and submit update information', () => {
      wrapper.instance().onUpdate({ foo: 'bar' });

      expect(editTaskSpy).toHaveBeenCalledWith('1', { foo: 'bar' });
    });
  });
  describe('render', () => {
    let enableSpy;
    let disableSpy;
    let updateSpy;
    let component;

    beforeEach(() => {
      enableSpy = jest.spyOn(EditTasksContainer.prototype, 'onEnable');
      disableSpy = jest.spyOn(EditTasksContainer.prototype, 'onDisable');
      updateSpy = jest.spyOn(EditTasksContainer.prototype, 'onUpdate');

      wrapper = shallow(<EditTasksContainer {...defaultProps} />);
      component = wrapper.find('TaskFormComponent');
    });
    test('should have a event prop for disable', () => {
      component.simulate('disable');
      expect(disableSpy).toHaveBeenCalled();
    });
    test('should have a event prop for enable', () => {
      component.simulate('enable');
      expect(enableSpy).toHaveBeenCalled();
    });
    test('should have a event prop for validSubmit', () => {
      component.simulate('validSubmit');
      expect(updateSpy).toHaveBeenCalled();
    });
  });
});
