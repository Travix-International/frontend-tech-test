// Third Party
import React from 'react';
import renderer from 'react-test-renderer';

//Component
import PanelHeaderComponent from '../../app/components/Header/PanelHeader'

test('onTagSelected() Tag is added to the list', () => {
    const component = renderer.create(
        <PanelHeaderComponent/>,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    console.log(tree.children[0].children[1].children[0].children[0].children[1].children[0].children[0].onClick());

    tree.onTagSelected({
        getAttribute () {
            return 'TAG';
        }
    });

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});