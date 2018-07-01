import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Tasks from '../Tasks.component';
import TableData from "../../../viewModels/TableData";
import {spy} from 'sinon';
import {expect} from 'chai';

configure({ adapter: new Adapter() });

const createStartButtonClick = spy();
function setup() {
    const wrapper = mount(
        <Tasks
            createSubmit={jest.fn()}
            createStart={createStartButtonClick}
            createCancel={jest.fn()}
            confirmLoading={false}
            loading={false}
            deleteCancel={jest.fn()}
            deleteStart={jest.fn()}
            deleteSubmit={jest.fn()}
            fetch={jest.fn()}
            pendingAdd={false}
            pendingDeleteId={undefined}
            pendingUpdateId={undefined}
            tableData={TableData.getDefault()}
            updateCancel={jest.fn()}
            updateStart={jest.fn()}
            updateSubmit={jest.fn()}
        />
    );

    return {wrapper}
}

describe('components', () => {
    describe('Tasks', () => {
        it('should find few components by CSS classes and simulate a click', () => {
            const {wrapper} = setup();
            expect(wrapper.find('.test')).to.have.length(1);
            wrapper.find('.ui .positive .button').simulate('click');
            expect(createStartButtonClick).to.have.property('callCount', 1);
        })
    })
});