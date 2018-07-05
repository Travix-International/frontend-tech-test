import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TodoList from '../../src/components/todolist.jsx';

enzyme.configure({ adapter: new Adapter() });

describe('TodoList Component', () => {
  it('Render', () => {
    const wrapper = shallow(<TodoList />);
    const component = wrapper;

    expect(component.exists()).toBe(true);
  });
});