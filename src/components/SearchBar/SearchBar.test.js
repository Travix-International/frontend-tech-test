import React from 'react';
import { mount } from 'enzyme';
import SearchBar from './SearchBar';
import { 
  FiX,
  FiSearch 
} from 'react-icons/fi';

describe('SearchBar test', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('should do searching while typing', () => {
    const search = jest.fn();
    const wrapper = mount(<SearchBar onSearch={search} />);
    wrapper.find('input').simulate('change');
    wrapper.find('input').simulate('change');
    expect(search).not.toBeCalled();
    jest.runAllTimers();
    expect(search).toBeCalled();
  });

  it('should change focus state the input gets clicked or loses focus', () => {
    const wrapper = mount(<SearchBar />);
    wrapper.find('input').simulate('click');
    expect(wrapper.state().focus).toBe(true);
    wrapper.find('input').simulate('blur');
    expect(wrapper.state().focus).toBe(false);
  });

  it('should udpate addon icon correctly in different cases', () => {
    const wrapper = mount(<SearchBar />);
    const input = wrapper.find('input');
    input.simulate('click');
    expect(wrapper.find(FiX)).toHaveLength(1);

    input.simulate('click');
    wrapper.setState({ inputValue: 'something' });
    input.simulate('blur');
    expect(wrapper.update().find(FiX)).toHaveLength(1);

    wrapper.setState({ inputValue: '' });
    input.simulate('blur');
    expect(wrapper.update().find(FiSearch)).toHaveLength(1);
  });
});