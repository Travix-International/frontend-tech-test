import React from 'react';
import { create } from 'react-test-renderer';

import InputForm from '../index';

const initial = {};
const renderComponent = props => {
  const finalProps = { ...initial, ...props };

  return (
    <InputForm {...finalProps} />
  );
};

describe('<InputForm />', () => {
  it('should render component', () => {
    const tree = create(renderComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with value', () => {
    const props = {
      value: 'value'
    };
    const tree = create(renderComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component when focus and blur', () => {
    const component = create(renderComponent());
    const instance = component.getInstance();

    instance.handleFocus();

    expect(component.toJSON()).toMatchSnapshot();

    instance.handleBlur();

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should call onChange when input changes', () => {
    const name = 'name';
    const value = 'value';
    const onChange = jest.fn();
    const props = {
      onChange
    };
    const component = create(renderComponent(props));
    const instance = component.getInstance();

    instance.handleChange(name, value);

    expect(onChange).toHaveBeenCalledWith(name, value);
  });

  it('should not call onChange when is not defined', () => {
    const name = 'name';
    const value = 'value';
    const onChange = jest.fn();
    const props = {};
    const component = create(renderComponent(props));
    const instance = component.getInstance();

    instance.handleChange(name, value);

    expect(onChange).not.toHaveBeenCalledWith(name, value);
  });

  it('should change isFilled to true when value changes is defined', () => {
    const component = create(renderComponent());
    const instance = component.getInstance();

    instance.componentWillReceiveProps({ value: 'value' });
    expect(instance.state.isFilled).toBe(true);
  });

  it('should change isFilled to false when value changes is not defined', () => {
    const component = create(renderComponent({ value: 'value' }));
    const instance = component.getInstance();

    instance.componentWillReceiveProps({});
    expect(instance.state.isFilled).toBe(false);
  });

  it('should not change when value does not change', () => {
    const component = create(renderComponent({ value: 'value' }));
    const instance = component.getInstance();

    expect(instance.state.isFilled).toBe(true);

    instance.componentWillReceiveProps({ value: 'value' });

    expect(instance.state.isFilled).toBe(true);
  });
});
