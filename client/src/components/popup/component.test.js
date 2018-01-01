import React from 'react';
import { shallow } from 'enzyme';
import Popup from './component';

const setup = ({
    children = null,
    title = null,
    visible = false,
    message = null }) => {
    const actions = {
        onHide: jest.fn(),
    };
    const component = shallow(
        <Popup message={message} title={title} visible={visible} {...actions}>
            {children}
        </Popup>
    );

    return {
        component,
        actions,
    };
};

describe('Popup component', () => {
    it('not visible by default', () => {
        const { component } = setup({});
        expect(component.type()).toEqual(null);
    });

    it('should render title', () => {
        const { component } = setup({ title: 'Title', visible: true });
        const title = component.find('.popup__title');
        expect(title.text()).toMatch('Title');
    });

    it('body should contain children', () => {
        const children = 'Children';
        const { component } = setup({ children, visible: true });
        const body = component.find('.popup__body');
        expect(body.text()).toMatch(children);
    });

    it('body should contain message when present', () => {
        const message = 'Message';
        const children = 'Children';
        const { component } = setup({ children, message, visible: true });
        const body = component.find('.popup__body');
        expect(body.text()).toMatch(message);
    });

    it('close button should call onHide', () => {
        const { component, actions } = setup({ visible: true });
        const button = component.find('.popup__close');
        button.simulate('click');
        expect(actions.onHide).toBeCalled();
    });

    it('overlay click should call onHide', () => {
        const { component, actions } = setup({ visible: true });
        const overlay = component.find('.popup__overlay');
        overlay.simulate('click');
        expect(actions.onHide).toBeCalled();
    });
});
