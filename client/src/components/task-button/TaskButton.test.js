import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import TaskButton from './TaskButton';

configure({ adapter: new Adapter() });

let button;
const mockCallBack = jest.fn();

describe('<TaskButton />', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  beforeEach(() => {
    button = mount(
      <TaskButton handleClick={mockCallBack} title="My Title" />,
    );
  });

  it('clicks button', () => {
    expect(button.simulate('click', mockCallBack));
    expect(mockCallBack).toHaveBeenCalledTimes(1);
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('shows title', () => {
    expect(button.text()).toBe('My Title');
  });
});
