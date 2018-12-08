import React from 'react';
import { shallow } from 'enzyme';
import Layout from '.';

describe ('Layout Component', () => {
  let component;
  beforeEach (() => {
    component = shallow (<Layout />);
  });
  afterEach (() => {
    component = null;
  });

  it ('should render the layout successfully', () => {
    expect (component.exists ()).toBe (true);
  });
  it ('should have a header, a main, and a footer component', () => {
    expect (component.find ('header').length).toEqual (1);
    expect (component.find ('main').length).toEqual (1);
    expect (component.find ('footer').length).toEqual (1);
  });
});