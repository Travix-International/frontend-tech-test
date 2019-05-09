import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';
import { Button } from 'reactstrap';
import { TaskEditor } from '../TaskEditor';

describe('Footer test', () => {

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.advanceTimersByTime(300);
    jest.clearAllTimers();
  });

  it('should render a button', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find(Button).text()).toBe('Add Task');
  });

  it('should toggle modal editor when clicks button', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find(TaskEditor).props().open).toBe(false);
    wrapper.find(Button).simulate('click');
    jest.advanceTimersByTime(300);
    expect(wrapper.find(TaskEditor).props().open).toBe(true);
  });
});