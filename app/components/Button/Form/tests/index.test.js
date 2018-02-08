import React from 'react';
import { create } from 'react-test-renderer';

import ButtonForm from '../index';

const initial = {};
const renderComponent = props => {
  const finalProps = { ...initial, ...props };

  return (
    <ButtonForm {...finalProps}>
      Test
    </ButtonForm>
  );
};

describe('<ButtonForm />', () => {
  it('should render component', () => {
    const tree = create(renderComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component when is secondary', () => {
    const props = {
      secondary: true
    };
    const tree = create(renderComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component when is loading', () => {
    const props = {
      loading: true
    };
    const tree = create(renderComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
