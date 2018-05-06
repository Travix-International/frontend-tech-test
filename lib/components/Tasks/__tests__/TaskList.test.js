import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import * as tasksSeed from '../../../__seed__/tasks';
import { TaskList } from '../TaskList';
import Task from '../Task';

const testProps = {
  actions: {},
  tasks: tasksSeed.tasks,
  showCompleted: true
};

describe('TaskList', () => {
  const totalTasksCount = testProps.tasks.length;
  const inCompleteTasksCount = testProps.tasks.filter(t => !t.isComplete)
    .length;

  it('renders correctly', () => {
    const tree = renderer.create(<TaskList {...testProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders ${totalTasksCount} <Task/> components when showCompleted is 'true'`, () => {
    const wrapper = shallow(<TaskList {...testProps} />);
    expect(wrapper.find(Task).length).toEqual(totalTasksCount);
  });

  it(`renders ${inCompleteTasksCount} <Task/> components when showCompleted is 'false'`, () => {
    const props = { ...testProps, showCompleted: false };
    const wrapper = shallow(<TaskList {...props} />);
    expect(wrapper.find(Task).length).toEqual(inCompleteTasksCount);
  });
});
