import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Task from '../components/Task';

Enzyme.configure({ adapter: new Adapter() });

describe('<Task />', () => {
  it('renders something', () => {
    const wrapper = render(<Task />);
    console.log(wrapper.find('.col-9'));
  });
});
