import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './../../../src/modules/loading/component';

describe('Loading Tests', () => {
  test('Loading Render', () => {
    const props = {
      show: false
    };

    const tree = renderer.create(
      <Loading {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
