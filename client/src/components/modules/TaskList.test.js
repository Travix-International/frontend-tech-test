import React from 'react';
import { TaskList } from './TaskList';
import reducers from 'reducers';

import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const props = {
  tasks: {
    tasks: [
      { id: 1, title: 'Task Test', description: 'Description Test', status: true },
      { id: 2, title: 'Task Test', description: 'Description Test', status: true }
    ],
  },
  toggleTask: (task, id) => id,
  deleteTask: (task, id) => id,
  updateTask: (tasks, task) => task.id,
  createTask: (tasks, title) => title,
  event: {
    preventDefault: () => {},
    type: 'blur',
    target: { value: 'Some task' }
  }
}

describe('<TaskList />', () => {
  it('should render <TaskList />', () => {
    const result = shallow(<TaskList {...props} />);
    const instance = result.props();

    expect(instance.className).toEqual('task-list-container');
  });

  it('should execute toggle action', () => {
    const result = shallow(<TaskList {...props} />);
    const instance = result.instance();

    expect(instance.onTaskToggle({ id: 1 })).toEqual(1);
  });

  it('should execute delete action', () => {
    const result = shallow(<TaskList {...props} />);
    const instance = result.instance();

    expect(instance.onTaskDelete({ id: 1 })).toEqual(1);
  });

  it('should execute update action', () => {
    const { tasks: { tasks }, event } = props;
    const result = shallow(<TaskList {...props} />);
    const instance = result.instance();

    expect(instance.onTaskUpdate(event, tasks[0], 'title')).toEqual(1);
  });

  it('should execute create action', () => {
    const { tasks: { tasks }, event } = props;
    const result = shallow(<TaskList {...props} />);
    const instance = result.instance();
    expect(instance.onTaskCreate(event, 'Title')).toEqual('Title');
  });

  it('should render empty list', () => {
    props.tasks.tasks = [];
    const result = mount(<TaskList {...props} />);
    const loader = result.find('.no-task');

    expect(loader.length).toEqual(1);
  });

  it('should render loader', () => {
    props.tasks.isFetching = true;
    const result = mount(<TaskList {...props} />);
    const loader = result.find('.loader');

    expect(loader.length).toEqual(1);
  });

});
