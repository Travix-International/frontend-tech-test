import React from 'react';
import { shallow } from 'enzyme';
import { DeleteTodo } from '../../containers/DeleteTodo';

describe('<DeleteTodo />', () => {
  let wrapper;

  describe('components', () => {
    it('should not render if editable', () => {
      const props = {
        editable: true,
        onClick: jest.fn()
      };
      wrapper = shallow(<DeleteTodo {...props} />);
      expect(wrapper.exists('span')).toBe(false);
    });

    it('should call onClick', () => {
      const props = {
        editable: false,
        onClick: jest.fn()
      };

      wrapper = shallow(<DeleteTodo {...props} />);

      let container = wrapper.find('.delete');
      expect(props.onClick).not.toHaveBeenCalled();
      container.simulate('click');
      expect(props.onClick).toHaveBeenCalled();
      expect(wrapper.find('FontAwesomeIcon').exists()).toBe(true);
      const statusIcon = wrapper.find('FontAwesomeIcon').props();
      expect(statusIcon.icon.iconName).toBe('trash-alt');
    });
  });
});
