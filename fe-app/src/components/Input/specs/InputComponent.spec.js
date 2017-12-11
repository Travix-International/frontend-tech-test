import React from 'react';
import { shallow } from 'enzyme';
import { InputComponent } from '../InputComponent';

describe('<InputComponent />', () => {
  let defaultProps;
  let wrapper;
  let setValueSpy;
  let getValueSpy;
  let showRequiredSpy;
  let isPristineSpy;
  let getErrorMessageSpy;
  let input;
  let event;

  beforeEach(() => {
    setValueSpy = jest.fn();
    getValueSpy = jest.fn(() => ('foo'));
    showRequiredSpy = jest.fn(() => (true));
    isPristineSpy = jest.fn(() => (false));
    getErrorMessageSpy = jest.fn(() => ('bar'));

    defaultProps = {
      disabled: false,
      getErrorMessage: getErrorMessageSpy,
      getValue: getValueSpy,
      isPristine: isPristineSpy,
      name: 'foo',
      setValue: setValueSpy,
      showRequired: showRequiredSpy,
    };
    wrapper = shallow(<InputComponent {...defaultProps} />);
    input = wrapper.find({ name: 'foo' });
  });
  test('should render component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  describe('input', () => {
    test('should render props', () => {
      expect(input.props().disabled).toBe(false);
      expect(input.props().name).toBe('foo');
    });
    test('should call getValue', () => {
      expect(input.props().value).toBe('foo');
      expect(getValueSpy).toHaveBeenCalled();
    });
  });
  describe('onChange', () => {
    test('should call setValue', () => {
      event = { currentTarget: { value: undefined } };
      wrapper.instance().onChange(event);
      expect(setValueSpy).toHaveBeenCalled();
    });
  });
  describe('onBlur', () => {
    event = { currentTarget: { value: undefined } };
    test('should call setValue', () => {
      wrapper.instance().onBlur(event);
      expect(setValueSpy).toHaveBeenCalled();
    });
  });
});
