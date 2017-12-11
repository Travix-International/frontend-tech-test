import React from 'react';
import { TaskCompleted } from './TaskCompleted';
import reducers from 'reducers';

import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const props = {
  task: { id: 1, status: true },
  onTaskToggle: () => 'toggle',
  onTaskDelete: () => 'delete'
}

describe('<TaskCompleted />', () => {
  it('should render <TaskCompleted />', () => {
    const result = shallow(<TaskCompleted {...props} />);
    const instance = result.props();

    expect(instance.className).toEqual('task-list-item is-done');
  });

  it('should execute toggle action', () => {
    const result = mount(<TaskCompleted {...props} />);
    const instance = result.props();
    const click = result.find('.on-task-done').simulate('click');

    expect(click.length).toEqual(1);
    expect(instance.onTaskToggle()).toEqual('toggle');
  });


  it('should execute delete action', () => {
    const result = mount(<TaskCompleted {...props} />);
    const instance = result.props();
    const click = result.find('.on-task-delete').simulate('click');

    expect(click.length).toEqual(1);
    expect(instance.onTaskDelete()).toEqual('delete');
  });
});
