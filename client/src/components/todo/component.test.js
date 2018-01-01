import React from 'react';
import { shallow } from 'enzyme';
import Todo from './component';

const setup = () => {
    const actions = {
        onEdit: jest.fn(),
        onDelete: jest.fn(),
    };
    const todo = {
        id: 1,
        title: 'Title',
        description: 'Description',
    };
    const component = shallow(
        <Todo {...actions} {...todo} />
    );

    return {
        component,
        actions,
        todo,
    };
};

describe('Todo component', () => {
    it('should render title', () => {
        const { component, todo } = setup();
        const title = component.find('.todo__title');
        expect(title.text()).toMatch(todo.title);
    });

    it('should render description', () => {
        const { component, todo } = setup();
        const description = component.find('.todo__description');
        expect(description.text()).toMatch(todo.description);
    });

    it('delete button should call onDelete', () => {
        const { component, actions } = setup();
        const button = component.find('.todo__remove');
        button.simulate('click');
        expect(actions.onDelete).toBeCalled();
    });

    it('edit button should call onDelete', () => {
        const { component, actions } = setup();
        const button = component.find('.todo__edit');
        button.simulate('click');
        expect(actions.onEdit).toBeCalled();
    });
});
