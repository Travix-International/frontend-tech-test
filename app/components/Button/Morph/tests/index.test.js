import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import ButtonMorph from '../index';

const initial = {};
const renderComponent = props => {
  const finalProps = { ...initial, ...props };

  return (
    <ButtonMorph {...finalProps}>
      Test
    </ButtonMorph>
  );
};

describe('<ButtonMorph />', () => {
  it('should render component', () => {
    const component = create(renderComponent());

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render component when is collapsed', () => {
    const component = create(renderComponent());
    const instance = component.getInstance();
    instance.handleClick();

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should set width and height when resize', () => {
    const component = mount(renderComponent());
    const instance = component.instance();
    const width = 100;
    const height = 100;

    instance.contentRef.getBoundingClientRect = jest.fn().mockReturnValue({ width, height });
    instance.handleResize();

    expect(instance.state.width).toBe(width);
    expect(instance.state.height).toBe(height);
  });

  it('should unmount', () => {
    const component = mount(renderComponent());

    expect(component.unmount()).toBe(component);
  });
});
