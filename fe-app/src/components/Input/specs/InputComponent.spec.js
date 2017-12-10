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
    describe('.input-has-error', () => {
      test('should render with error', () => {
        expect(wrapper.hasClass('input-has-error')).toBe(true);
      });
      test('should not render error: pristine', () => {
        isPristineSpy.mockReturnValue(true);

        wrapper = shallow(<InputComponent {...defaultProps} />);
        expect(wrapper.hasClass('input-has-error')).toBe(false);
      });
      test('should not render error: not required, no error', () => {
        showRequiredSpy.mockReturnValue(false);
        getErrorMessageSpy.mockReturnValue('');

        wrapper = shallow(<InputComponent {...defaultProps} />);
        expect(wrapper.hasClass('input-has-error')).toBe(false);
      });
    });
    describe('<p.input-error />', () => {
      test('should render input error', () => {
        expect(wrapper.find('.input-error').text()).toBe('bar');
      });
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
