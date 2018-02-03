/* global expect, it, describe */

import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from '../../../src/javascript/components/TodoItem';

describe('TodoItem component', () => {
  it('Should render successfully', () => {
    const component = shallow(<TodoItem />);
    expect(component.exists()).toEqual(true);
  });
});
