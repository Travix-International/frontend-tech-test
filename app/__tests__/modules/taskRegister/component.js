import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import TaskRegister from './../../../src/modules/taskRegister/component';

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
      <Router>
        <TaskRegister {...props} />
      </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
