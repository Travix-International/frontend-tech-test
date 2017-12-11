import React from 'react';
import { TaskCreate } from './TaskCreate';
import reducers from 'reducers';

import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const props = {
  task: { id: 1, status: true },
  onTaskCreate: () => 'create',
}

describe('<TaskCreate />', () => {
  it('should render <TaskCreate />', () => {
    const result = shallow(<TaskCreate {...props} />);
    const instance = result.props();

    expect(instance.className).toEqual('task-list-item');
  });

  it('should execute create action', () => {
    const result = mount(<TaskCreate {...props} />);
    const instance = result.props();
    const click = result.find('form').simulate('submit');

    expect(click.length).toEqual(1);
    expect(instance.onTaskCreate()).toEqual('create');
  });
});
