import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Filter from '../../src/components/filter/filter.jsx';

enzyme.configure({ adapter: new Adapter() });

describe('Filter Component', () => {
  it('Render', () => {
    const wrapper = shallow(<Filter />);

    expect(wrapper.exists()).toBe(true);
  });
});