import React from 'react';
import { shallow } from 'enzyme';

import { TASKS_PER_PAGE } from '../../../Globalconstants';
import TravixtaskList from '../TravixtaskList';

jest.mock('react-redux', () => ({ connect: () => Component => Component }));

const props = {
  fetchTasks: jest.fn(),
  handleTaskSelection: jest.fn(),
  updatedDate: Date.now(),
  filterBy: '',
  pageNumber: 1,
  totalRecords: 10,
  fetching: false,
  tasks: [
    { id: 5, title: 'asdasd', description: 'asdas' },
    { id: 3, title: 'asdasd', description: 'asdas' },
    { id: 1, title: 'asdasd', description: 'asdas' },
  ],
};

describe('<TravixtaskList /> Tests', () => {
  it('should render TaskList properly', () => {
    const wrapper = shallow(<TravixtaskList {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('TravixtaskItem').exists()).toBe(true);
  });

  it('should fetch when TaskList rendered', () => {
    shallow(<TravixtaskList {...props} />);
    expect(props.fetchTasks).toHaveBeenCalledWith(1, TASKS_PER_PAGE, props.filterBy);
  });

  it('should call proper actions when task selected', () => {
    const wrapper = shallow(<TravixtaskList {...props} />);
    wrapper
      .find('TravixtaskItem')
      .at(0)
      .dive()
      .simulate('click');
    expect(props.handleTaskSelection).toHaveBeenCalled();
  });

  it('should call proper actions when page changed', () => {
    const wrapper = shallow(<TravixtaskList {...props} />);
    wrapper
      .find('Recordspaging')
      .dive()
      .find('a')
      .at(2)
      .simulate('click');
    expect(props.fetchTasks).toHaveBeenCalled();
  });

  it('should update when task when updateDate or filter changed', () => {
    const wrapper = shallow(<TravixtaskList {...props} />);
    const newProps = { updatedDate: Date.now(), filterBy: 'as' };
    wrapper.setProps({ ...newProps });
    expect(props.fetchTasks).toHaveBeenCalled();
  });
});
