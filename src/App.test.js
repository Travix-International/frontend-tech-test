import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('async actions', () => {
  // We should mock "/tasks" api endpoint before rendering App Component.
  beforeEach(() => {
    const mock = new MockAdapter(axios);
    const data = { tasks: [] };
    mock.onGet('/tasks').reply(200, data);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

});

