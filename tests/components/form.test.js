import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Form from '../../src/components/form.jsx';

enzyme.configure({ adapter: new Adapter() });

describe('Form Component', () => {
  it('Render', () => {
    const wrapper = shallow(<Form />);
    const component = wrapper;

    expect(component.exists()).toBe(true);
  });
});