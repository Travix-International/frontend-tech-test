import React from 'react';
import { shallow, mount } from 'enzyme';
import VisibilityFilter from './VisibilityFilter';
import { TASK_FILTER } from '../../constants';
import { DropdownItem } from 'reactstrap';

const filters = Object.keys(TASK_FILTER).map(k => ({
  title: k,
  value: k
}));

describe('VisibilityFilter test', () => {
  it('should render filter menu', () => {
    const wrapper = shallow(
      <VisibilityFilter
        filters={filters}
        currentFilter={filters[0].value}
      />
    );
    // 4 items including header
    expect(wrapper.find(DropdownItem)).toHaveLength(4);
  });

  it('should pass filter value to onFilterChange function', () => {
    let filter;
    const setFilter = f => filter = f;

    const wrapper = shallow(
      <VisibilityFilter
        filters={filters}
        currentFilter={filters[0].value}
        setFilter={setFilter}
      />
    );

    wrapper.find(DropdownItem).at(3).simulate('click');
    expect(filter).toBe(filters[2].value);
  });
});