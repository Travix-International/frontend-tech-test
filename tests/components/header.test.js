import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from 'react-toolbox/lib/button';

import Header from '../../src/components/header/header.jsx';

enzyme.configure({ adapter: new Adapter() });

describe('Header Component', () => {
  it('Render', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.exists()).toBe(true);
  });

  it('Add button click', () => {
    const propsMock = {
      unsetActiveTodo: jest.fn(),
      showDialog: jest.fn()
    };
    const wrapper = shallow(<Header { ...propsMock } />);
    
    wrapper.find(Button).prop('onClick')();
    expect(propsMock.unsetActiveTodo).toHaveBeenCalled();
    expect(propsMock.showDialog).toHaveBeenCalled();
  });
});