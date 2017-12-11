import React from 'react';
import { shallow } from 'enzyme';
import ActionButton from '../ActionButton';

describe('<ActionButton />', () => {
  let defaultProps;
  let wrapper;

  beforeEach(() => {
    defaultProps = {
      isSubmitting: false,
      name: 'foo',
      canSubmit: true,
    };
    wrapper = shallow(<ActionButton {...defaultProps} />);
  });
  test('should render component', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
