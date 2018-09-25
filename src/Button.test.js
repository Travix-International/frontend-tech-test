import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

import Button from './components/Button/Button';

configure({ adapter: new Adapter() });

    describe('<Button />', () => {
        it('Allows us to set props', () => {
            const wrapper = mount(<Button type="submit" />);
            expect(wrapper.props().type).to.equal('submit');
            wrapper.setProps({ type: 'text' });
            expect(wrapper.props().type).to.equal('text');
        });

        it('simulates click events', () => {
            const onButtonClick = sinon.spy();
            const wrapper = mount(<Button />);
            wrapper.setProps({ onAction: onButtonClick });
            wrapper.find('button').simulate('click');
            expect(onButtonClick).to.have.property('callCount', 1);
          });
  });