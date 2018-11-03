import React from 'react';
import { shallow } from 'enzyme';
import RecordsPaging from '../RecordsPaging';
import { TASKS_PER_PAGE } from '../../../Globalconstants';

const props = {
  currentPage: 1,
  totalRecords: 10,
  onPageClick: jest.fn(),
};

describe('<RecordsPaging /> tests', () => {
  it('should render Paging properly', () => {
    const wrapper = shallow(<RecordsPaging {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('a')).toHaveLength(3); // << 1 >>
  });

  it('should have called page click event when triggered clicked', () => {
    const wrapper = shallow(<RecordsPaging {...props} />);
    const links = wrapper.find('a');
    links.forEach(link => {
      link.simulate('click');
      expect(props.onPageClick).toHaveBeenCalled();
    });
  });
});
