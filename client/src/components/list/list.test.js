import React from 'react';
import { shallow } from 'enzyme';
import List from '.';

describe ('List Section of Task app', () => {
  let component;
  beforeEach (() => {
    component = shallow (<List />);
  });
  afterEach (() => {
    component = null;
  });

  it ('should render the List section without crashing', () => {
    expect (component.exists ()).toBe (true);
  });

  it ('should contain three tabs for all, pending, and completed items', () => {
    expect (component.find ('Tab').length).toEqual (3);
  });
})