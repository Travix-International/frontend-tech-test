import React from 'react';
import { shallow } from 'enzyme';
import Paging from '../Paging';
import { TASKS_PER_PAGE } from '../../../constants';

const props = {
  currentPage: 1,
  totalRecords: 10,
  onPageClicked: jest.fn(),
};

describe('<Paging /> tests', () => {
  it('should render Paging properly', () => {
    const wrapper = shallow(<Paging {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('a')).toHaveLength(3); // << 1 >>
  });

  it('should have called page click event when triggered clicked', () => {
    const wrapper = shallow(<Paging {...props} />);
    const links = wrapper.find('a');
    links.forEach(link => {
      link.simulate('click');
      expect(props.onPageClicked).toHaveBeenCalled();
    });
  });
});
