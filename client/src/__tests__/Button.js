import React from 'react';
import Button from '../components/Button';
import renderer from 'react-test-renderer';

describe('Button Component', () => {
  let props;

  beforeEach(() => {
    props = {
      type: 'button',
      className: "abc",
      text: 'test'
    };
  });

  it('renders without crashing', () => {
    const tree = renderer.create(<Button {...props} />)

    expect(tree.toJSON()).toMatchSnapshot();
  });
});