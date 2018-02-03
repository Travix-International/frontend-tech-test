/* global expect, it, describe */

import React from 'react';
import { shallow, mount } from 'enzyme';
import TodoAdd from '../../../src/javascript/components/TodoAdd';

describe('TodoAdd component', () => {
  it('Should render successfully', () => {
    const component = shallow(<TodoAdd />);
    expect(component.exists()).toEqual(true);
  });

  it('Should have two inputs', () => {
    const component = mount(<TodoAdd />);
    expect(component.find('.ui-input_add-title-text').length).toEqual(1);
    expect(component.find('.ui-input_add-description-text').length).toEqual(1);
  });

  describe('Add todo button', () => {
    it('Should exist', () => {
      const component = mount(<TodoAdd />);
      expect(component.find('.ui-button_submit-todo').length).toEqual(1);
    });
  });
});
