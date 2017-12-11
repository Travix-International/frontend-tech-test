import React from 'react';
import { TaskActive } from './TaskActive';
import reducers from 'reducers';

import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const props = {
  task: { id: 1, status: true },
  onTaskToggle: () => 'toggle',
  onTaskDelete: () => 'delete',
  onTaskUpdate: () => 'update',
}

describe('<TaskActive />', () => {
  it('should render <TaskActive />', () => {
    const result = shallow(<TaskActive {...props} />);
    const instance = result.props();

    expect(instance.className).toEqual('task-list-item');
  });

  it('should execute toggle action', () => {
    const result = mount(<TaskActive {...props} />);
    const instance = result.props();
    const click = result.find('.on-task-done').simulate('click');

    expect(click.length).toEqual(1);
    expect(instance.onTaskToggle()).toEqual('toggle');
  });


  it('should execute delete action', () => {
    const result = mount(<TaskActive {...props} />);
    const instance = result.props();
    const click = result.find('.on-task-delete').simulate('click');

    expect(click.length).toEqual(1);
    expect(instance.onTaskDelete()).toEqual('delete');
  });

  it('should execute update title action', () => {
    const result = mount(<TaskActive {...props} />);
    const instance = result.props();
    const click = result.find('input').simulate('change');

    expect(click.length).toEqual(1);
    expect(instance.onTaskUpdate()).toEqual('update');
  });

  it('should execute update description action', () => {
    const result = mount(<TaskActive {...props} />);
    const instance = result.props();
    const click = result.find('textarea').simulate('change');

    expect(click.length).toEqual(1);
    expect(instance.onTaskUpdate()).toEqual('update');
  });
});
