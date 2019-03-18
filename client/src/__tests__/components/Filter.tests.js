import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Filter from '../../components/Filter';

describe('<Filter />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<Filter />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
