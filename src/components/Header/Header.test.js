import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';
import { DropdownItem } from 'reactstrap';

describe('Header test', () => {
  it('should render a filter menu in header', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find(DropdownItem)).toHaveLength(4);
  });
});