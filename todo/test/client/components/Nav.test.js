import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { Nav } from '../../../app/components/Nav/Nav';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Nav component', () => {

  const component = shallow(<Nav store={mockStore({})}/>).shallow();

  it('contains input for search', () => {
    expect(component.containsMatchingElement(
        <input type="text" className="form-control" placeholder="Search" aria-describedby="search-addon"></input>
      )).to.equal(true);
  });

  it('contains add todo button', () => {
    expect(component.containsMatchingElement(
        <button type="button" className="btn btn-default add-todo-button">
            <i className="material-icons">add</i>
        </button>
      )).to.equal(true);
  });

  
});
