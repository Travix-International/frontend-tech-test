import React from 'react';
import { shallow } from 'enzyme';
import { EditTodo } from '../../containers/EditTodo';

describe('<EditTodo />', () => {
  let wrapper;

  describe('components', () => {
    const props = {
      onClick: jest.fn()
    };
    wrapper = shallow(<EditTodo {...props} />);
    it('should contain components', () => {
      wrapper = shallow(<EditTodo {...props} />);

      expect(wrapper.find('FontAwesomeIcon').exists()).toBe(true);
      const statusIcon = wrapper.find('FontAwesomeIcon').props();
      expect(statusIcon.icon.iconName).toBe('edit');
    });

    it('should call onClick', () => {
      wrapper = shallow(<EditTodo {...props} />);

      let container = wrapper.find('.edit');
      expect(props.onClick).not.toHaveBeenCalled();
      container.simulate('click');
      expect(props.onClick).toHaveBeenCalled();
    });
  });
});
