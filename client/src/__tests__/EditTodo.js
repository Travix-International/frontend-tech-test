import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { EditTodo } from '../components/EditTodo';
import renderer from 'react-test-renderer';

describe('Edit Component', () => {
  let props;

  beforeEach(() => {
    props = {
        fetchIndividualTodo : jest.fn(),
        updateTodo : jest.fn(),
    };
  });

  it('renders without crashing', () => {
    const tree = renderer.create(
        <BrowserRouter>
        <EditTodo {...props} match={{params: {id: 1}, isExact: true, path: "", url: ""}}/>
        </BrowserRouter>)
    expect(tree.toJSON()).toMatchSnapshot();
  });
});