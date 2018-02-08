import React from 'react';
import { create } from 'react-test-renderer';

import ButtonList from '../index';

const initial = {};
const renderComponent = props => {
  const finalProps = { ...initial, ...props };

  return (
    <ButtonList {...finalProps}>
      Test
    </ButtonList>
  );
};

describe('<ButtonList />', () => {
  it('should render component', () => {
    const tree = create(renderComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
