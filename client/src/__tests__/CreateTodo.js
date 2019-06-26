import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CreateTodo } from '../components/CreateTodo';
import renderer from 'react-test-renderer';

describe('Create Component', () => {
  let props;

  beforeEach(() => {
    props = {
        createTodo : jest.fn()
    };
  });

  it('renders without crashing', () => {
    const tree = renderer.create(
        <BrowserRouter>
        <CreateTodo {...props} />
        </BrowserRouter>)
    expect(tree.toJSON()).toMatchSnapshot();
  });
});