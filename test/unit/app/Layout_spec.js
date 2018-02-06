import React from 'react';
import '../enzyme_setup';
import  { shallow } from 'enzyme';
import Layout from '../../../src/components/Layout';

describe('<Layout />', function(){
  it('should be defined', function(){
    expect(Layout).to.exist;
  });

  it('should render a div with class .layout', function(){
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('.layout')).to.have.length(1);
  });
});