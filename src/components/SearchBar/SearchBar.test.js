import React from 'react';
import { mount } from 'enzyme';
import SearchBar from './SearchBar';
import { 
  FiX,
  FiSearch 
} from 'react-icons/fi';
import { InputGroupAddon } from 'reactstrap';

describe('SearchBar test', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('should do searching while typing', async () => {
    const search = jest.fn();
    //see https://github.com/facebook/jest/issues/3465#issuecomment-335160011
    jest.useRealTimers();
    const wrapper = mount(<SearchBar onSearch={search} />);
    wrapper.find('input').simulate('change');
    wrapper.find('input').simulate('change');
    await new Promise(resolve => (
      setTimeout(() => {
        expect(search).toBeCalledTimes(1);
        resolve();
      }, 500)
    ));
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
    input.instance().value = 'something';
    input.simulate('change');
    input.simulate('blur');
    expect(wrapper.update().find(FiX)).toHaveLength(1)

    input.instance().value = '';
    input.simulate('change');
    input.simulate('blur');
    expect(wrapper.update().find(FiSearch)).toHaveLength(1);

    input.simulate('click');
    input.instance().value = 'something';
    expect(wrapper.update().find(FiX)).toHaveLength(1);
    input.simulate('blur');
    wrapper.find(InputGroupAddon).simulate('click');
    expect(wrapper.update().find(FiSearch)).toHaveLength(1);
  });
});