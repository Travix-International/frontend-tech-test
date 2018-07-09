import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dialog from 'react-toolbox/lib/dialog';

import TodoDialog from '../../src/components/tododialog/tododialog.jsx';
import DialogData from '../../src/components/dialogdata/dialogdata.jsx';
import TodoForm from '../../src/components/todoform/todoform.jsx';

enzyme.configure({ adapter: new Adapter() });

const dialogStateMock = {
  isOpened: false,
  isTodoChanges: false,
  form: {}
};

describe('TodoDialog Component', () => {
  it('Render', () => {
    const wrapper = shallow(<TodoDialog dialog={ dialogStateMock } />);

    expect(wrapper.exists()).toBe(true);
  });

  it('Render without todo', () => {
    const wrapper = shallow(<TodoDialog dialog={ dialogStateMock } />);
    const instance = wrapper.instance();

    const expectedActions = [
      { label: 'add todo', onClick: instance.onAddClick, icon: 'add', primary: true }
    ];
    
    expect(wrapper.find(Dialog).find(DialogData).length).toBe(0);
    expect(wrapper.find(Dialog).find(TodoForm).length).toBe(1);
    expect(wrapper.find(Dialog).prop('actions')).toEqual(expectedActions);
  });

  it('Render with todo', () => {
    const wrapper = shallow(
      <TodoDialog
        dialog={ dialogStateMock }
        todo={ {} }
      />
    );
    const instance = wrapper.instance();

    const expectedActions = [
      { label: 'delete todo', onClick: instance.onDeleteClick, icon: 'delete', primary: true },
      { label: 'change todo', onClick: instance.onChangeClick, icon: 'create', primary: true }
    ];

    expect(wrapper.find(Dialog).find(DialogData).length).toBe(1);
    expect(wrapper.find(Dialog).find(TodoForm).length).toBe(0);
    expect(wrapper.find(Dialog).prop('actions')).toEqual(expectedActions);
  });

  it('Render with todo changing', () => {
    const wrapper = shallow(
      <TodoDialog
        dialog={ { ...dialogStateMock, isTodoChanges: true } }
        todo={ {} }
      />
    );
    const instance = wrapper.instance();

    const expectedActions = [
      { label: 'cancel', onClick: instance.onCancelClick, primary: true },
      { label: 'update todo', onClick: instance.onUpdateClick, icon: 'delete', primary: true }
    ];

    expect(wrapper.find(Dialog).find(DialogData).length).toBe(0);
    expect(wrapper.find(Dialog).find(TodoForm).length).toBe(1);
    expect(wrapper.find(Dialog).prop('actions')).toEqual(expectedActions);
  });

  it('Cancel click', () => {
    const propsMock = {
      changeDialogView: jest.fn(),
      isTodoChanges: true
    };

    const wrapper = shallow(<TodoDialog dialog={ dialogStateMock } { ...propsMock } />);
    const instance = wrapper.instance();
    instance.onCancelClick();
    expect(propsMock.changeDialogView).toHaveBeenCalled();
  });

  it('Add click', () => {
    const propsMock = {
      addTodo: jest.fn(),
      hideDialog: jest.fn(),
      isTodoChanges: true
    };

    const wrapper = shallow(<TodoDialog dialog={ dialogStateMock } { ...propsMock } />);
    const instance = wrapper.instance();
    instance.onAddClick();
    expect(propsMock.addTodo).toHaveBeenCalledWith(dialogStateMock.form);
    expect(propsMock.hideDialog).toHaveBeenCalled();
  });

  it('Update click', () => {
    const propsMock = {
      updateTodo: jest.fn(),
      hideDialog: jest.fn(),
      isTodoChanges: true,
      todo: {}
    };

    const wrapper = shallow(<TodoDialog dialog={ dialogStateMock } { ...propsMock } />);
    const instance = wrapper.instance();
    instance.onUpdateClick();
    expect(propsMock.updateTodo).toHaveBeenCalledWith({
      ...propsMock.todo,
      ...dialogStateMock.form
    });
    expect(propsMock.hideDialog).toHaveBeenCalled();
  });

  it('Delete click', () => {
    const propsMock = {
      deleteTodo: jest.fn(),
      hideDialog: jest.fn(),
      todo: {
        id: 1
      }
    };

    const wrapper = shallow(<TodoDialog dialog={ dialogStateMock } { ...propsMock } />);
    const instance = wrapper.instance();
    instance.onDeleteClick();
    expect(propsMock.deleteTodo).toHaveBeenCalledWith(propsMock.todo.id);
    expect(propsMock.hideDialog).toHaveBeenCalled();
  });

  it('Change click', () => {
    const propsMock = {
      changeDialogField: jest.fn(),
      changeDialogView: jest.fn(),
      todo: {
        title: '',
        description: '',
        subtasks: [],
        tags: []
      }
    };

    const wrapper = shallow(<TodoDialog dialog={ dialogStateMock } { ...propsMock } />);
    const instance = wrapper.instance();
    instance.onChangeClick();
    expect(propsMock.changeDialogView).toHaveBeenCalledWith(true);
    expect(propsMock.changeDialogField).toHaveBeenCalledWith(propsMock.todo);
  });
});