import React from 'react';
import { mount, shallow } from 'enzyme';
import Footer from './Footer';
import { Button } from 'reactstrap';
import { TaskEditor } from '../TaskEditor';

describe('Footer test', () => {

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runTimersToTime(300);
    jest.clearAllTimers();
  });

  it('should render a button', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find(Button).text()).toBe('Add Task');
  });

  it('should toggle modal editor when clicks button', () => {
    const wrapper = shallow(<Footer />);
    wrapper.find(Button).simulate('click');
    jest.runTimersToTime(300);
    expect(wrapper.find(TaskEditor).props().open).toBe(true);
    wrapper.find(Button).simulate('click');
    jest.runTimersToTime(300);
    expect(wrapper.find(TaskEditor).props().open).toBe(false);
  });
});