import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe ('App Component', () => {
  let component;
  beforeEach (() => {
    component = shallow (<App />)
  })
  it('renders without crashing', () => {
    expect (component.exists ()).toEqual (true);
  });
})
