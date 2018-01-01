import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

const setup = (icon = null, className) => {
    const component = shallow(
        <Button className={className} icon={icon} />
    );

    return {
        component,
    };
};

describe('Button component', () => {
    it('should render icon', () => {
        const src = '/test/src';
        const { component } = setup(src);
        const icon = component.find('.button__icon');
        expect(icon.length).toEqual(1);
        expect(icon.prop('src')).toEqual(src);
    });

    it('should have proper className', () => {
        const className = 'test__class';
        const { component } = setup(null, className);
        const button = component.find('button');
        expect(button.hasClass('button')).toEqual(true);
        expect(button.hasClass(className)).toEqual(true);
    });
});
