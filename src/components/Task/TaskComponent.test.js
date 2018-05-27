import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount, configure, shallow  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Task from './TaskComponent';


configure({ adapter: new Adapter() });

const actions = {
  saveTask: jest.fn(),
  deleteTask: jest.fn(),
};

const editableTask = {
  isComplete: false,
  isEditable: true
};

const nonEditableTask = {
  isComplete: false,
  isEditable: false
};

const editableTaskElement = <Task {...actions} task={editableTask}/>;
const nonEditableTaskElement = <Task {...actions} task={nonEditableTask}/>;

beforeAll(() => {
  // shallow(editableTaskElement);
});

describe('Task', () =>{

  it('save editable todo', () => {
    const element = shallow(editableTaskElement);
    const saveButton = element.find('.save-task-button');
    saveButton.simulate('click');
    expect(actions.saveTask).toBeCalled();
    const task = element.state().task;
    expect(task.isEditable).toBe(false);
  });

  it('delete editable todo', () => {
    const element = shallow(editableTaskElement);
    const deleteButton = element.find('.delete-task-button');
    deleteButton.simulate('click');
    expect(actions.deleteTask).toBeCalled();
  });

  it('delete non-editable todo', () => {
    const element = shallow(nonEditableTaskElement);
    const deleteButton = element.find('.delete-task-button');
    deleteButton.simulate('click');
    expect(actions.deleteTask).toBeCalled();
  });

  it('complete todo', () => {
    const element = shallow(nonEditableTaskElement);
    const completeButton = element.find('.complete-task-button').at(0);
    completeButton.simulate('click');
    const task = element.state().task;
    expect(task.isComplete).toBe("true");
  });

  it('set todo editable', () => {
    const element = shallow(nonEditableTaskElement);
    const editButton = element.find('.edit-task-button').at(0);
    editButton.simulate('click');
    const task = element.state().task;
    expect(task.isEditable).toBe(true);
  });


});
