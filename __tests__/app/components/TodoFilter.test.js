/* global expect, it, describe */

import React from 'react';
import { shallow } from 'enzyme';
import TodoFilter from '../../../src/javascript/components/TodoFilter';

describe('TodoFilter component', () => {
  it('Should render successfully', () => {
    const component = shallow(<TodoFilter />);
    expect(component.exists()).toEqual(true);
  });
});
