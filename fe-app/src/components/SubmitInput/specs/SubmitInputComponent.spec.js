import React from 'react';
import { shallow } from 'enzyme';
import SubmitInputComponent from '../SubmitInputComponent';

describe('<SubmitInputComponent />', () => {
  let defaultProps;
  let wrapper;
  let input;

  beforeEach(() => {
    defaultProps = {
      isSubmitting: false,
      name: 'foo',
      canSubmit: true,
    };
    wrapper = shallow(<SubmitInputComponent {...defaultProps} />);
    input = wrapper.find('input');
  });
  test('should render component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  describe('Input', () => {
    describe('render with props', () => {
      test('should render name', () => {
        expect(input.props().name).toBe('foo');
      });
      test('should render disabled false when canSubmit: true', () => {
        expect(input.props().disabled).toBe(false);
      });
      test('should render disabled true when canSubmit: false', () => {
        defaultProps.canSubmit = false;
        wrapper = shallow(<SubmitInputComponent {...defaultProps} />);
        input = wrapper.find('input');
        expect(input.props().disabled).toBe(true);
      });
    });
    test('should show Submit isFetching: false', () => {
      expect(input.props().value).toBe('Submit');
    });
    test('should show Submitting isFetching: true', () => {
      defaultProps.isSubmitting = true;
      wrapper = shallow(<SubmitInputComponent {...defaultProps} />);
      input = wrapper.find('input');
      expect(input.props().value).toBe('Submitting...');
    });
  });
});
