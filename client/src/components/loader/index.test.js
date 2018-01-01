import React from 'react';
import { shallow } from 'enzyme';
import { Loader } from './index';

const setup = (loading = false) => {
    const component = shallow(
        <Loader loading={loading} />
    );

    return {
        component,
    };
};

describe('Loader component', () => {
    it('not visible by default', () => {
        const { component } = setup();
        expect(component.type()).toEqual(null);
    });

    it('should render spinner image', () => {
        const { component } = setup(true);
        const image = component.find('.loader__image');
        expect(image.length).toEqual(1);
    });
});
