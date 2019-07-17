import React from 'react';
import { shallow } from 'enzyme';
import TextArea from './TextArea';

it('renders TextArea correctly', () => {
  const wrapper = shallow(<TextArea />);

  expect(wrapper).toMatchSnapshot();
});