import React from 'react';
import { shallow } from 'enzyme';
import AddTask from './AddTask';

it('renders AddTask correctly', () => {
  const wrapper = shallow(
  <AddTask 
    handleAddTask={() => {}} 
    handleClose={() => {}}
    handleEditTask={() => {}} />);

  expect(wrapper).toMatchSnapshot();
});