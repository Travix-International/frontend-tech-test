import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { Todo } from '../../../app/components/Todo/Todo';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Todo component', () => {

    const component = shallow(<Todo store={mockStore({})} />).shallow();
    it('contains edit button', () => {
        expect(component.containsMatchingElement(
            <button type="button" className="btn btn-default">
                <i className="material-icons">edit</i>
            </button>
        )).to.equal(true);
    });

    it('contains delete button', () => {
        expect(component.containsMatchingElement(
            <button type="button" className="btn btn-default">
                <i className="material-icons">delete</i>
            </button>
        )).to.equal(true);
    });

});
