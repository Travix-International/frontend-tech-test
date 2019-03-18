import React from 'react';
import { shallow } from 'enzyme';
import { Filter } from '../../containers/FilterLink';

describe('<FilterLink />', () => {
  let wrapper;

  describe('components', () => {
    const props = {
      onClick: jest.fn(),
      active: false,
      children: 'filter'
    };

    wrapper = shallow(<Filter {...props} />);
    it('should render correct components', () => {
      wrapper = shallow(<Filter {...props} />);
      expect(wrapper.find('span').text()).toBe('filter');
    });

    it('should call onClick', () => {
      wrapper = shallow(<Filter {...props} />);

      let container = wrapper.find('span');
      expect(props.onClick).not.toHaveBeenCalled();
      container.simulate('click');
      expect(props.onClick).toHaveBeenCalled();
    });
  });
});
