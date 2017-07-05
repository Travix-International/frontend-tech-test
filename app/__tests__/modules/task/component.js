import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Task from './../../../src/modules/task/component';

describe('Task Tests', () => {
  test('Task Render', () => {
    const props = {
      tasks: {},
      isFetching: false,
      notification: {},
      taskList: () => {},
      taskDelete: () => {}
    };

    const tree = renderer.create(
      <Router>
        <Task {...props} />
      </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
