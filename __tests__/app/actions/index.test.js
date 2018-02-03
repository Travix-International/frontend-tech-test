import actionTypes from '../../../src/javascript/constants/ActionTypes';
import actions from '../../../src/javascript/actions';

describe('todo actions', () => {
  it('listTodos should create LIST_TODOS action', () => {
    expect(actions.listTodos()).toEqual({
      type: actionTypes.LIST_TODOS,
    });
  });

  it('listTodo should create LIST_TODO action', () => {
    const id = 1;
    expect(actions.listTodo(id)).toEqual({
      type: actionTypes.LIST_TODO,
      id,
    });
  });

  it('createTodo should create CREATE_TODO action', () => {
    const title = 'Todo title';
    const description = 'Todo description';

    expect(actions.createTodo(title, description)).toEqual({
      type: actionTypes.CREATE_TODO,
      title,
      description,
    });
  });

  it('editTodoTitle should create EDIT_TODO_TITLE action', () => {
    const id = 1;
    const title = 'Todo title';

    expect(actions.editTodoTitle(id, title)).toEqual({
      type: actionTypes.EDIT_TODO_TITLE,
      id,
      title,
    });
  });

  it('editTodoTitle should create EDIT_TODO_DESCRIPTION action', () => {
    const id = 1;
    const description = 'Todo description';

    expect(actions.editTodoDescription(id, description)).toEqual({
      type: actionTypes.EDIT_TODO_DESCRIPTION,
      id,
      description,
    });
  });

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: actionTypes.TOGGLE_TODO,
      id: 1,
    });
  });

  it('deleteTodo should create DELETE_TODO action', () => {
    expect(actions.deleteTodo(1)).toEqual({
      type: actionTypes.DELETE_TODO,
      id: 1,
    });
  });
});
