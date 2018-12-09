/**
 * @fileoverview Test Suite: For task input form.
 * @author Jayendra Sharan (http://jayendra.co.in)
 */
import React from 'react';
import { shallow } from 'enzyme';
import TaskInput from '.';

describe ('Task input component', () => {
  let component;
  const mockFn = jest.fn ();
  beforeEach (() => {
    component = shallow (<TaskInput
                            createTask={ mockFn }
                            />)
  })
  it ('should render without crashing', () => {
    expect (component.exists ()).toBe (true);
  });

  it ('should have at least one input box', () => {
    expect (component.find ('Input').length).toBeGreaterThanOrEqual (1);
  });
});
