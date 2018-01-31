import React from 'react';
import renderer from 'react-test-renderer';
import { ItemRender } from './index';

describe('Item view mode snapshot test', () => {
  it('DOM structure renders correctly', () => {
    const todo = {
      description: "Todo Description",
      title: "Todo Title",
    };
    const tree = renderer
      .create(<ItemRender
        todo={todo}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
