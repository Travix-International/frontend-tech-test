import React from 'react';
import renderer from 'react-test-renderer';
import { ListRender } from './index';
import todoListMock from '../../mocks/todoList';


describe('Item view mode snapshot test', () => {
  it('DOM structure renders correctly', () => {
    const tree = renderer
      .create(<ListRender
        todoList={todoListMock}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
