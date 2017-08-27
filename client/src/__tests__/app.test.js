import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../app';


describe('App', () => {
  it('should render', () => {
    const appElement = shallow(<App />);
    expect(toJson(appElement)).toMatchSnapshot();
  });
});
