import React from 'react';
import { shallow } from 'enzyme';
import { AddTasksContainer } from '../AddTasksContainer';

describe('AddTasksContainer', () => {
  let defaultProps;
  let wrapper;
  let addTasksSpy;

  beforeEach(() => {
    addTasksSpy = jest.fn();
    defaultProps = {
      actions: { addTasks: addTasksSpy },
      isSubmitting: false,
    };
    wrapper = shallow(<AddTasksContainer {...defaultProps} />);
  });
  describe('constructor', () => {
    test('should set initial state', () => {
      expect(wrapper.state('canSubmit')).toBe(false);
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
  describe('onSubmit', () => {
    test('should parse and submit information', () => {
      wrapper.instance().onSubmit({ foo: 'bar' });

      expect(addTasksSpy).toHaveBeenCalledWith({ foo: 'bar' });
    });
  });
  describe('render', () => {
    let enableSpy;
    let disableSpy;
    let submitSpy;
    let component;

    beforeEach(() => {
      enableSpy = jest.spyOn(AddTasksContainer.prototype, 'onEnable');
      disableSpy = jest.spyOn(AddTasksContainer.prototype, 'onDisable');
      submitSpy = jest.spyOn(AddTasksContainer.prototype, 'onSubmit');

      wrapper = shallow(<AddTasksContainer {...defaultProps} />);
      component = wrapper.find('AddTasksComponent');
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
      expect(submitSpy).toHaveBeenCalled();
    });
  });
});
