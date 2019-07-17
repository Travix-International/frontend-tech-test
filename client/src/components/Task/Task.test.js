import React from 'react';
import { shallow } from 'enzyme';
import Task from './Task';

it('renders Task correctly', () => {
  const wrapper = shallow(<Task />);

  expect(wrapper).toMatchSnapshot();
});