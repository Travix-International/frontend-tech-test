import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import App from '../../components/App';
Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<App />);

describe('<App />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('components', () => {
    it('should render self and subcomponents', () => {
      expect(wrapper.exists('#container')).toBe(true);
      expect(wrapper.find('Connect(AddTodo)').exists()).toBe(true);
      expect(wrapper.find('Filter').exists()).toBe(true);
      expect(wrapper.find('Connect(TodoList)').exists()).toBe(true);
    });
  });
});
