import React from 'react';
import { shallow } from 'enzyme';
import Component from '.';

describe('<Nav />', () => {
  const updateSort = jest.fn();

  const renderWrapper = sort => shallow(
    <Component
      sort={sort}
      updateSort={updateSort}
    />
  );

  const genericWrapper = renderWrapper(null);

  it('should render a All button with active class if sort is null', () => {
    const wrapper = renderWrapper(null);
    expect(wrapper.find('button').first().hasClass('active')).toEqual(true);
  });

  it('should calls updateSort with null value if All button be click', () => {
    genericWrapper.find('button').first().simulate('click');
    expect(updateSort).toBeCalled();
    expect(updateSort.mock.calls[0][0]).toEqual(null);
  });

  it('should render a Active button with active class if sort is active', () => {
    const wrapper = renderWrapper('active');
    expect(wrapper.find('button').at(1).hasClass('active')).toEqual(true);
  });

  it('should calls updateSort with "active" value if Active button be click', () => {
    genericWrapper.find('button').at(1).simulate('click');
    expect(updateSort).toBeCalled();
    expect(updateSort.mock.calls[1][0]).toEqual('active');
  });

  it('should render a Completed button with active class if sort is completed', () => {
    const wrapper = renderWrapper('completed');
    expect(wrapper.find('button').last().hasClass('active')).toEqual(true);
  });

  it('should calls updateSort with "completed" value if Completed button be click', () => {
    genericWrapper.find('button').last().simulate('click');
    expect(updateSort).toBeCalled();
    expect(updateSort.mock.calls[2][0]).toEqual('completed');
  });
});
