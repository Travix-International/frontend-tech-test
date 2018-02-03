import React from 'react';
import { shallow } from 'enzyme';
import App from '../../../src/javascript/components/App';

it('App renders without crashing', () => {
  const component = shallow(<App />);

  expect(component.exists()).toEqual(true);
});
