import React from 'react';
import { shallow } from 'enzyme';

import Main from '../Main';

describe('<Main /> Tests', () => {
  it('should render Main', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.exists()).toBe(true);
  });
});
