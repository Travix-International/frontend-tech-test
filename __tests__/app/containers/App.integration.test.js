import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import AppConnect from '../../../src/javascript/containers/App';

import actionTypes from '../../../src/javascript/constants/ActionTypes';
import * as actions from '../../../src/javascript/actions';

import testUtils from '../../../config/testUtils';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

export default function renderAppWithState(state) {
  const store = mockStore(state);
  const wrapper = mount(<Provider store={store}>
    <AppConnect />
                        </Provider>);

  return [store, wrapper];
}

describe('App component integration', () => {
  let jestMock = testUtils.asyncActionSetup('RESOURCE_CREATED', [
    {
      id: 0,
      title: 'Test title 0',
      description: 'Test description',
      completed: true,
      deleted: false,
    },
    {
      id: 1,
      title: 'Test title 1',
      description: 'Test description',
      completed: false,
      deleted: false,
    },
  ]);

  window.fetch = jestMock;

  const [store, wrapper] = renderAppWithState({
    todos: [],
    todosFilter: {
      filter: 'SHOW_ALL',
      searching: false,
      searchValue: '',
    },
    appState: 'APP_READY',
  });

  it('Critical path should load todos from server', async () => {
    await store.dispatch(actions.fetchTodos()).then(() => {
      const expectedActions = store.getActions();

      expect(expectedActions).toContainEqual({ type: actionTypes.APP_FETCHING });
      expect(expectedActions).toContainEqual({
        type: actionTypes.LIST_TODOS,
        todos: [
          {
            id: 0,
            title: 'Test title 0',
            description: 'Test description',
            completed: true,
            deleted: false,
          },
          {
            id: 1,
            title: 'Test title 1',
            description: 'Test description',
            completed: false,
            deleted: false,
          },
        ],
      });
      expect(expectedActions).toContainEqual({ type: actionTypes.APP_READY });
    });
  });

  it('Should update title and description inputs on change event', async () => {
    wrapper
      .find('.ui-input_add-title-text')
      .simulate('change', { target: { value: 'Todo title' } });

    wrapper
      .find('.ui-input_add-description-text')
      .simulate('change', { target: { value: 'Todo description' } });

    wrapper.update();
    expect(wrapper.find('.ui-input_add-title-text').props().value).toBe('Todo title');
    expect(wrapper.find('.ui-input_add-description-text').props().value).toBe('Todo description');

    const title = 'Todo title';
    const description = 'Todo description';

    jestMock = testUtils.asyncActionSetup(
      'RESOURCE_CREATED',
      {
        id: 0,
        title,
        description,
        completed: false,
      },
      201,
    );

    window.fetch = jestMock;

    await store.dispatch(actions.createTodo(title, description)).then(() => {
      const expectedActions = store.getActions();

      expect(expectedActions).toContainEqual({ type: actionTypes.APP_FETCHING });
      expect(expectedActions).toContainEqual({
        todo: {
          completed: false, description: 'Todo description', id: 0, title: 'Todo title',
        },
        type: 'CREATE_TODO',
      });
      expect(expectedActions).toContainEqual({ type: actionTypes.APP_READY });
    });
  });
});
