import React from 'react';
import { create } from 'react-test-renderer';

import InputList from '../index';

const initial = {};
const renderComponent = props => {
  const finalProps = { ...initial, ...props };

  return (
    <InputList {...finalProps} />
  );
};

describe('<InputList />', () => {
  it('should render component', () => {
    const tree = create(renderComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component when disabled', () => {
    const props = {
      disabled: true
    };
    const tree = create(renderComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
