import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';

import Main from '../../src/components/main.jsx';

enzyme.configure({ adapter: new Adapter() });

describe('Main Component', () => {
  it('Render', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <Main/>
      </MemoryRouter>
    );
    const component = wrapper.dive();

    expect(component.exists()).toBe(true);
  });
});