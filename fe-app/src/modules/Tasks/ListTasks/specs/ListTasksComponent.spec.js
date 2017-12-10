import React from 'react';
import { shallow } from 'enzyme';
import ListTasksComponent from '../ListTasksComponent';

describe('ListTasksComponent', () => {
  let defaultProps;
  let wrapper;

  beforeEach(() => {
    defaultProps = {
      tasks: [{ foo: 'bar' }],
    };
    wrapper = shallow(<ListTasksComponent {...defaultProps} />);
  });
  test('should render with default props', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
