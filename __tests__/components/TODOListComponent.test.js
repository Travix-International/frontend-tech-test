// Third Party
import React from 'react';
import renderer from 'react-test-renderer';

//Component
import TODOItemComponent from '../../app/components/TODOItem'

test('TODOItemComponent marked as completed', () => {
    const TODO = {
        copleted: true,
        description: '',
        title: ''
    }

    const component = renderer.create(
        <TODOItemComponent TODO={TODO}/>,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('TODOItemComponent marked as uncompleted', () => {
    const TODO = {
        copleted: false,
        description: '',
        title: ''
    }

    const component = renderer.create(
        <TODOItemComponent TODO={TODO}/>,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});