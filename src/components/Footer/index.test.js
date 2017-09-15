import React from 'react';
import { mount } from 'enzyme';
import Footer from '.';

describe('Footer Component', () => {
  const updateSort = jest.fn();

  const renderWrapper = sort => mount(
    <Footer
      sort={sort}
      updateSort={updateSort}
    />
  );

  const genericWrapper = renderWrapper(null);

  it('should render a All button with active class if sort is null', () => {
    const wrapper = renderWrapper(null);
    expect(wrapper.find('.ui-button_todo').first().hasClass('ui-button_active')).toEqual(true);
  });

  it('should calls updateSort with null value if All button be click', () => {
    genericWrapper.find('.ui-button_todo').first().simulate('click');
    expect(updateSort).toBeCalled();
    expect(updateSort.mock.calls[0][0]).toEqual(0);
  });

  it('should render a Active button with active class if sort is active', () => {
    const wrapper = renderWrapper(1);

    expect(wrapper.find('.ui-button_todo').at(1).hasClass('ui-button_active')).toEqual(true);
  });

  it('should calls updateSort with "active" value if Active button be click', () => {
    genericWrapper.find('.ui-button_todo').at(1).simulate('click');
    expect(updateSort).toBeCalled();
    expect(updateSort.mock.calls[1][0]).toEqual(1);
  });

  it('should render a Completed button with active class if sort is completed', () => {
    const wrapper = renderWrapper(2);
    expect(wrapper.find('.ui-button_todo').last().hasClass('ui-button_active')).toEqual(true);
  });

  it('should calls updateSort with "completed" value if Completed button be click', () => {
    genericWrapper.find('.ui-button_todo').last().simulate('click');
    expect(updateSort).toBeCalled();
    expect(updateSort.mock.calls[2][0]).toEqual(2);
  });

});
