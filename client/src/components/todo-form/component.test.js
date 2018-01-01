import React from 'react';
import { shallow } from 'enzyme';
import TodoForm from './component';

const setup = (action = "add") => {
    const actions = {
        onSubmit: jest.fn(),
        onClose: jest.fn(),
    };
    const component = shallow(
        <TodoForm action={action} {...actions} />
    );

    return {
        component: component,
        actions: actions,
    };
};

describe('Todo Form component', () => {
    it('should render title', () => {
        const { component } = setup();
        const label = component.find('label');
        expect(label.at(0).text()).toMatch('Title');
    });

    it('submitted form should should call onSubmit', () => {
        const { component, actions } = setup();
        const form = component.find('.add-todo');
        form.simulate('submit');
        expect(actions.onSubmit).toBeCalled();
    });

    it('closed component should call onClose', () => {
        const { component, actions } = setup();
        component.unmount();
        expect(actions.onClose).toBeCalled();
    });

    it('should render Add button', () => {
        const { component } = setup();
        const button = component.find('Button').dive().find('button');
        expect(button.text()).toMatch('add');
    });

    it('should render Edit button', () => {
        const { component } = setup('edit');
        const button = component.find('Button').dive().find('button');
        expect(button.text()).toMatch('edit');
    });
});
