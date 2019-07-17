import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('renders Card correctly', () => {
  const wrapper = shallow(<Card>Test</Card>);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.contains('Test')).toBe(true);
});