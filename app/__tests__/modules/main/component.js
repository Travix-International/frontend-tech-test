import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Main from './../../../src/modules/main/component';

import { store } from './../../../src/store';

describe('Main Tests', () => {
  test('Main Render', () => {
    const props = {};

    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Main {...props} />
        </Router>
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
