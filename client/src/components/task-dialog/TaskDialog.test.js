import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configure, mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { loadTasks, createTask } from '../../redux/modules/tasks';
import TaskDialog from './TaskDialog';

configure({ adapter: new Adapter() });

const mockData = {
  id: '0',
  title: 'My title',
  description: 'My description',
};
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ task: mockData });
let wrapper;

describe('<TaskDialog />', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <TaskDialog open />
      </Provider>,
    );
  });

  it('should dispatch action', () => {
    store.dispatch(loadTasks());

    const actions = store.getActions();
    const expectedPayload = { type: 'LOAD_TASKS' };

    expect(actions[0].type).toEqual(expectedPayload.type);
  });

  it('should dispatch action to create task', () => {
    store.dispatch(createTask(mockData.title, mockData.description));

    const actions = store.getActions();
    const expectedPayload = { type: 'CREATE_TASK' };

    expect(actions[1].type).toEqual(expectedPayload.type);
  });

  it('renders form elements', () => {
    expect(wrapper.render().find('#title')).toHaveLength(1);
    expect(wrapper.render().find('#description')).toHaveLength(1);
  });

  it('renders form elements with filled in values', () => {
    wrapper = mount(
      <Provider store={store}>
        <TaskDialog isEdit open task={mockData} />
      </Provider>,
    );
    const title = wrapper.render().find('#title');
    const desc = wrapper.render().find('#description');

    expect(title.get(0).attribs.value).toEqual('My title');
    expect(desc.get(0).attribs.value).toEqual('My description');
  });
});
