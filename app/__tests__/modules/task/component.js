import React from 'react';
import { Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Task from './../../../src/modules/task/component';

import { history } from './../../../src/store';

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
      <Router history={history}>
        <Task {...props} />
      </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
