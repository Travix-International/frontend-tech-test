import React from 'react';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import configureStore from '../store/configureStore';
import App from '../app';

const wrapper = shallow(<Provider store={store}>
    						<App />
    					</Provider>);
const store = configureStore();

describe('(Component) App', () => {
  it('renders without exploding', () => {
    expect(wrapper).to.have.length(1);
  });
});