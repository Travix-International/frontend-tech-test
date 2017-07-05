import React from 'react';
import { Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import TaskRegister from './../../src/modules/taskRegister/component';

import { history } from './../../src/store';

describe('TaskRegister Tests', () => {
  test('TaskRegister Render', () => {
    const props = {
      task: {
        _id: '',
        title: '',
        description: '',
        date: '',
        completed: false
      },
      taskSave: () => {}
    };

    const tree = renderer.create(
      <Router history={history}>
        <TaskRegister {...props} />
      </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
