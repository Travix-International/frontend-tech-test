import React from 'react';
import { shallow } from 'enzyme';
import Form from '../FormComponent';

describe('FormsyForm', () => {
  let defaultProps;
  let wrapper;
  let onValidSubmitSpy;
  let onEnableSpy;
  let onDisableSpy;

  beforeEach(() => {
    onValidSubmitSpy = jest.fn();
    onEnableSpy = jest.fn();
    onDisableSpy = jest.fn();
    defaultProps = {
      onValidSubmit: onValidSubmitSpy,
      onEnable: onEnableSpy,
      onDisable: onDisableSpy,
    };
    wrapper = shallow(<Form {...defaultProps} ><div id="foo" /></Form>);
  });
  test('should render Form', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('should simulate onInvalid event', () => {
    wrapper.simulate('Invalid');
    expect(onDisableSpy).toHaveBeenCalled();
  });
  test('should simulate onValid event', () => {
    wrapper.simulate('Valid');
    expect(onEnableSpy).toHaveBeenCalled();
  });
  test('should simulate onValidSubmit event', () => {
    wrapper.simulate('ValidSubmit');
    expect(onValidSubmitSpy).toHaveBeenCalled();
  });
  test('should render children', () => {
    expect(wrapper.find('#foo').exists()).toBe(true);
  });
});
