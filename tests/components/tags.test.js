import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Tags from '../../src/components/tags/tags.jsx';

enzyme.configure({ adapter: new Adapter() });

const tagsMock = [];

describe('Tags Component', () => {
  it('Render', () => {
    const wrapper = shallow(<Tags tags={ tagsMock } />);

    expect(wrapper.exists()).toBe(true);
  });

  it('Render without tags', () => {
    const wrapper = shallow(<Tags tags={ [] } />);
    
    expect(wrapper.exists()).toBe(true);
  });
});