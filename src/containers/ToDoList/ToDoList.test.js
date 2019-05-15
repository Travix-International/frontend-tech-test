import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ToDoList from './ToDoList';

Enzyme.configure({ adapter: new Adapter() })

describe('ToDoList', () => {
    let wrapper, store;

    beforeEach(() => {
      const initialState = {}; 
      const mockStore = configureStore();
      store = mockStore(initialState);
      wrapper = shallow(<ToDoList store={store} />)
     })
    
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    })
})
