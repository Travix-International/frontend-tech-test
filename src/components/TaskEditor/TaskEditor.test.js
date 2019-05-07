import React from 'react';
import { mount } from 'enzyme';
import TaskEditor from './TaskEditor';
import { 
  ModalHeader,
  Button,
  FormFeedback
} from 'reactstrap';

const task = {
  id: 'td_1',
  title: 'todo',
  description: 'todo'
};

describe('TaskEditor test', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    // forward time to fade out modal
    jest.runTimersToTime(300);
    jest.clearAllTimers();
  });

  it('should render a new task editor', () => {
    const wrapper = mount(<TaskEditor open={true} />);
    jest.runTimersToTime(300);
    expect(wrapper.find(ModalHeader).text()).toMatch('Add task');
    expect(wrapper.find(Button)).toHaveLength(2);
  });

  it('should render a editing task editor', () => {
    const wrapper = mount(<TaskEditor open={true} task={task} />);
    jest.runTimersToTime(300);
    expect(wrapper.find(ModalHeader).text()).toMatch(task.title);
    expect(wrapper.find(Button)).toHaveLength(3);
  });

  it('should display title and description in input field', () => {
    const wrapper = mount(<TaskEditor open={true} task={task} />);
    jest.runTimersToTime(300);
    expect(wrapper.find('input').instance().value).toBe(task.title);
    expect(wrapper.find('textarea').instance().value).toBe(task.description);
  });

  it('should call onToggle when clicked close button', () => {
    const toggle = jest.fn();
    const wrapper = mount(<TaskEditor open={true} onToggle={toggle} />);
    jest.runTimersToTime(300);
    wrapper.find('button.close').simulate('click');
    expect(toggle).toBeCalled();
  });

  it('should call onDelete and pass the id value in onDelete function', () => {
    let itemId;
    const deleteFunc = id => itemId = id;
    const wrapper = mount(<TaskEditor open={true} task={task} onDelete={deleteFunc} />);
    jest.runTimersToTime(300);
    wrapper.find('button.btn-danger').simulate('click');
    expect(itemId).toBe(task.id);
  });

  it('should call onSubmit and pass task object in onSubmit function', () => {
    let item;
    const submit = t => item = t;
    const wrapper = mount(<TaskEditor open={true} task={task} onSubmit={submit} />);
    jest.runTimersToTime(300);
    wrapper.setState({ validTitle: true });
    wrapper.find('button.btn-primary').simulate('click');
    expect(item).toEqual(task);
  });
});