import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Todo from '../../components/Todo';
Enzyme.configure({ adapter: new Adapter() });
function setup() {
  const props = {
    id: 1,
    title: 'title',
    description: 'description',
    completed: true,
    editable: true,
    onClick: jest.fn()
  };
  const wrapper = shallow(<Todo {...props} />);

  return {
    props,
    wrapper
  };
}

describe('<Todo />', () => {
  describe('components', () => {
    it('should render self and subcomponents', () => {
      const { wrapper } = setup();

      expect(wrapper.exists('li')).toBe(true);
      expect(wrapper.exists('#title-field')).toBe(true);
      expect(wrapper.exists('#description-field')).toBe(true);

      expect(wrapper.find('FontAwesomeIcon').exists()).toBe(true);
      const statusIcon = wrapper.find('FontAwesomeIcon').props();
      expect(statusIcon.icon.iconName).toBe('clipboard-check');

      expect(wrapper.find('Connect(SaveTodo)').exists()).toBe(true);
      expect(wrapper.find('Connect(EditTodo)').exists()).toBe(true);
      expect(wrapper.find('Connect(DeleteTodo)').exists()).toBe(true);
    });
  });
});
