import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Todo from '../../src/components/todo.jsx';

enzyme.configure({ adapter: new Adapter() });

describe('Todo Component', () => {
  it('Render', () => {
    const wrapper = shallow(<Todo />);
    const component = wrapper;

    expect(component.exists()).toBe(true);
  });
});