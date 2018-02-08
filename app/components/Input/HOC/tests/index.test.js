import React from 'react';
import { create } from 'react-test-renderer';

import InputHOC from '../index';

const Component = InputHOC('Component');
const initial = {};
const renderComponent = props => {
  const finalProps = { ...initial, ...props };

  return <Component {...finalProps} />;
};

describe('<InputHOC />', () => {
  it('should render component', () => {
    const tree = create(renderComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call onChange when input changes', () => {
    const name = 'name';
    const value = 'value';
    const onChange = jest.fn();
    const props = {
      name,
      onChange
    };
    const component = create(renderComponent(props));
    const instance = component.getInstance();

    instance.handleChange({ target: { value } });

    expect(onChange).toHaveBeenCalledWith(value, name);
  });
});
