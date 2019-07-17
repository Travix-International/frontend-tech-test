import React from 'react';
import { shallow } from 'enzyme';
import TaskList from './TaskList';

it('renders TaskList correctly', () => {
  const wrapper = shallow(<TaskList deleteTask={() => {}} editTask={() => {}} />);

  expect(wrapper).toMatchSnapshot();
});