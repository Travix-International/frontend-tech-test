import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

it('renders Button correctly', () => {
  const wrapper = shallow(<Button />);

  expect(wrapper).toMatchSnapshot();
});