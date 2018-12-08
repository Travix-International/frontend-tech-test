import React from 'react';
import { shallow } from 'enzyme';
import TaskInput from '.';

describe ('Task input component', () => {
  let component;

  beforeEach (() => {
    component = shallow (<TaskInput />)
  })
  it ('should render without crashing', () => {
    expect (component.exists ()).toBe (true);
  });

  it ('should have at least one input box', () => {
    expect (component.find ('Input').length).toBeGreaterThanOrEqual (1);
  });
});
