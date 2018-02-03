/* global expect, it, describe */

import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../../../src/javascript/components/TodoList';

describe('TodoList component', () => {
  it('Should render successfully', () => {
    const component = shallow(<TodoList />);
    expect(component.exists()).toEqual(true);
  });
});
