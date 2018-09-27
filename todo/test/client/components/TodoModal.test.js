import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { TodoModal } from '../../../app/components/TodoModal/TodoModal';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('TodoModal component', () => {

    const todo = {
        id: 0,
        title: "Title",
        description: "description"
    }
    const component = shallow(<TodoModal todo={todo} store={mockStore({})} />).shallow();
    
    it('contains save button', () => {
        expect(component.containsMatchingElement(
            <button type="submit" className="btn btn-default btn-save">save</button>
        )).to.equal(true);
    });

    it('contains cancel button', () => {
        expect(component.containsMatchingElement(
            <button type="submit" className="btn btn-default btn-cancel">cancel</button>
        )).to.equal(true);
    });

    it('contains input', () => {
        expect(component.containsMatchingElement(
            <input type="text" className="form-control" placeholder="Title"></input>
        )).to.equal(true);
    });

    it('contains textarea', () => {
        expect(component.containsMatchingElement(
            <textarea rows="5" className="form-control" placeholder="Description"></textarea>
        )).to.equal(true);
    });

});
