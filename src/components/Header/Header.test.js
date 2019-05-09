import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';
import { DropdownItem } from 'reactstrap';

describe('Header test', () => {
  it('should render a filter menu in header', () => {
    const wrapper = mount(<Header />);
    // 1 for title, 3 for fitler types
    expect(wrapper.find(DropdownItem)).toHaveLength(4);
  });

  
});