import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders App correctly', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});