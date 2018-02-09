/* global expect, it, describe */

import React from 'react';
import { shallow } from 'enzyme';
import TodoFilter from '../../../src/javascript/components/TodoFilter';

const mockComponent = () => {
  const props = {
    setVisibilityFilter: jest.fn(),
  };

  const shallowComponent = shallow(<TodoFilter {...props} />);

  return {
    props,
    shallowComponent,
  };
};

describe('TodoFilter component', () => {
  it('Should render successfully', () => {
    const { shallowComponent } = mockComponent();

    expect(shallowComponent.exists()).toEqual(true);
  });

  it('ToggleButton handleSelect should update TodoFilter selectedIndex state', () => {
    const { shallowComponent } = mockComponent();

    const toggleButton = shallowComponent.props().children;

    toggleButton.props.handleSelect(undefined, 1);
    expect(shallowComponent.state().selectedIndex).toEqual(1);

    toggleButton.props.handleSelect(undefined, 2);
    expect(shallowComponent.state().selectedIndex).toEqual(2);

    toggleButton.props.handleSelect(undefined, 0);
    expect(shallowComponent.state().selectedIndex).toEqual(0);
  });

  it('ToggleButton handleSelect should call setVisibilityFilter method', () => {
    const { shallowComponent, props } = mockComponent();

    const toggleButton = shallowComponent.props().children;

    toggleButton.props.handleSelect(undefined, 1);

    expect(props.setVisibilityFilter.mock.calls.length).toBe(1);
  });
});
