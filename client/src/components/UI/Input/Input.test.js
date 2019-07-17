import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

it('renders Input correctly', () => {
  const wrapper = shallow(<Input />);

  expect(wrapper).toMatchSnapshot();
});