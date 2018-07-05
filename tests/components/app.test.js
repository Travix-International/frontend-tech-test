import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import App from '../../src/components/app.jsx';

const initialState = {
  todos: []
};

const mockStore = configureStore([thunk]);
const store = mockStore(initialState);

enzyme.configure({ adapter: new Adapter() });

describe('App Component', () => {
  it('Render', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <App store={ store } />
      </MemoryRouter>
    );
    const component = wrapper.dive();

    expect(component.exists()).toBe(true);
  });
});