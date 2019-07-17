import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

it('renders Loader correctly', () => {
  const wrapper = shallow(<Loader />);

  expect(wrapper).toMatchSnapshot();
});