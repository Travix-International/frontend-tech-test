import React from 'react';
import renderer from 'react-test-renderer';
import Notification from './../../../src/modules/notification/component';

describe('Notification Tests', () => {
  test('Notification Render', () => {
    const props = {
      options: {
        show: true,
        success: true,
        message: 'Task saved!'
      }
    };

    const tree = renderer.create(
      <Notification {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
