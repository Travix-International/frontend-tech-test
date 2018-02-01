import React from 'react';
import renderer from 'react-test-renderer';
import { FormRender } from './index';

describe('Form snapshot test', () => {
  it('DOM structure renders correctly', () => {
    const mockFn = jest.fn();
    const tree = renderer
      .create(<FormRender
        action={mockFn}
        actionBtnTitle="Action"
        changeDescription={mockFn}
        changeTitle={mockFn}
        clearDescription={mockFn}
        clearTitle={mockFn}
        description="Description"
        formTitle="Form Title"
        title="Title"
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
