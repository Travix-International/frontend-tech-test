import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';

import Main from '../../src/components/main/main.jsx';

enzyme.configure({ adapter: new Adapter() });

describe('Main Component', () => {
  it('Render', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <Main/>
      </MemoryRouter>
    );
    const component = wrapper.dive();

    expect(component.exists()).toBe(true);
  });

  it('Filter method', () => {
    const todosMock = [
      {
        title: 'test',
        description: 'test',
        isDone: false
      },
      {
        title: 'test1',
        description: 'test1',
        isDone: true
      },
    ];

    const wrapper = shallow(
      <Main
        match={
          {
            params: {
              filter: 'done'
            }
          }
        }
        todos={ todosMock }
        />
    );
    const instance = wrapper.instance();

    const expected = todosMock.filter(todo => todo.isDone === true);
    
    expect(instance.filterTodos()).toEqual(expected);
  });
});