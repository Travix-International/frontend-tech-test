import React from 'react';
import { shallow } from 'enzyme';
import TaskFormComponent from '../TaskFormComponent';

describe('TaskFormComponent', () => {
  let defaultProps;
  let onDisableSpy;
  let onEnableSpy;
  let onValidSubmitSpy;
  let wrapper;

  beforeEach(() => {
    onDisableSpy = jest.fn();
    onEnableSpy = jest.fn();
    onValidSubmitSpy = jest.fn();
    defaultProps = {
      buttonTitle: 'FOO title',
      canSubmit: false,
      isSubmitting: false,
      onDisable: onDisableSpy,
      onEnable: onEnableSpy,
      onValidSubmit: onValidSubmitSpy,
      task: { foo: 'bar' },
    };
    wrapper = shallow(<TaskFormComponent {...defaultProps} />);
  });
  describe('<Form />', () => {
    test('should render a Form', () => {
      expect(wrapper.exists()).toBe(true);
      expect(wrapper.props().className).toBe('row flex-bottom form-group');
      expect(wrapper.props().onDisable).toBe(onDisableSpy);
      expect(wrapper.props().onEnable).toBe(onEnableSpy);
      expect(wrapper.props().onValidSubmit).toBe(onValidSubmitSpy);
    });
    test('should render title input', () => {
      expect(wrapper.find({ name: 'title' }).exists()).toBe(true);
    });
    test('should render description input', () => {
      expect(wrapper.find({ name: 'description' }).exists()).toBe(true);
    });
    test('should render submit Input: cannot submit', () => {
      const submit = wrapper.find({ name: 'submit' });

      expect(submit.exists()).toBe(true);
      expect(submit.props().canSubmit).toBe(false);
      expect(submit.props().buttonTitle).toBe('FOO title');
    });
    test('should render submit Input: can submit', () => {
      defaultProps.canSubmit = true;
      wrapper = shallow(<TaskFormComponent {...defaultProps} />);
      const submit = wrapper.find({ name: 'submit' });

      expect(submit.exists()).toBe(true);
      expect(submit.props().canSubmit).toBe(true);
      expect(submit.props().buttonTitle).toBe('FOO title');
    });
  });
});
