import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

it('renders Modal correctly', () => {
  const wrapper = shallow(<Modal closeModal={() => {}}>Test</Modal>);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.contains('Test')).toBe(true);
});