import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { taskApi } from '../api/api';
import Tasks from './Tasks';
import reducer from '../store/reducer';

const spy = jest.spyOn(taskApi, 'getTasks').mockImplementation(jest.fn());
const div = document.createElement('div');

describe('Tasks Component', () => {
  beforeEach(() => {
    const store = createStore(reducer);
    ReactDOM.render(
      <Provider store={store}>
        <Tasks />
      </Provider>,
      div,
    );
  });

  it('renders without crashing', () => {
    ReactDOM.unmountComponentAtNode(div);
    spy.mockClear();
  });

  it('should getTasks on mount', () => {
    ReactDOM.unmountComponentAtNode(div);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockClear();
  });
});
