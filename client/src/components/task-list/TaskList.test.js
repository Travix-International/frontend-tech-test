import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configure, mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import TaskList from './TaskList';

configure({ adapter: new Adapter() });

const mockData = [{
  id: '0',
  title: 'My title',
  description: 'My description',
},
{
  id: '1',
  title: 'Second title',
  description: 'Second description',
}];

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ tasks: mockData });
let wrapper;

describe('<TaskList />', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <TaskList loaded loading={false} tasks={mockData} />
      </Provider>,
    );
  });

  it('populates task list', () => {
    const table = wrapper.find('.rt-table');
    const tbody = table.find('.rt-tbody');
    const rows = tbody.find('.rt-tr');
    const firstRowColumns = rows.first().find('.rt-td');
    const firstColumnData = firstRowColumns.map(column => column.text());

    const secondRowColumns = rows.at(1).find('.rt-td');
    const secondColumnData = secondRowColumns.map(column => column.text());

    expect(rows.length).toBe(2);
    expect(firstColumnData.length).toBe(6);
    expect(secondColumnData.length).toBe(6);

    expect(firstColumnData[1]).toEqual('0');
    expect(firstColumnData[2]).toEqual('My title');
    expect(firstColumnData[3]).toEqual('My description');

    expect(secondColumnData[1]).toEqual('1');
    expect(secondColumnData[2]).toEqual('Second title');
    expect(secondColumnData[3]).toEqual('Second description');
  });
});
