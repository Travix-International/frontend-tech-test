import { call, put } from "redux-saga/effects";
import assert from "assert";
import { todosFetchList, todosAddEdit, todosDelete } from "../../src/sagas/todos";
import ApiTodos from "../../src/api/todos";

// unit tests for the todos saga
describe('Todos saga', () => {
  describe('todosFetchList()', () => {
    const generator = todosFetchList();
    generator.next();

    it('should return the ApiTodos.getList call', () => {
      assert.deepEqual(generator.next().value, call(ApiTodos.getList));
    });

    it('should return the TODOS_LIST_SAVE action', () => {
      assert.deepEqual(generator.next().value, put({type: 'TODOS_LIST_SAVE', todos: undefined}));
    });

    it('should be finished', () => {
      assert.equal(generator.next().done, true);
    });
  });

  describe('todosAddEdit() - add', () => {
    const action = {
      todo: {id: 0, task: 'foo'},
    };
    const generator = todosAddEdit(action);
    generator.next();

    it('should return the ApiTodos.addEdit call', () => {
      assert.deepEqual(generator.next().value, call(ApiTodos.addEdit, action));
    });

    it('should return the TODOS_ADD_SAVE action', () => {
      assert.deepEqual(generator.next(action.todo).value, put({
        type: 'TODOS_ADD_SAVE',
        todo: action.todo,
      }));
    });

    it('should be finished', () => {
      generator.next();
      assert.equal(generator.next().done, true);
    });
  });

  describe('todosAddEdit() - edit', () => {
    const action = {
      todo: {id: 1, task: 'test'},
    };
    const generator = todosAddEdit(action);
    generator.next();

    it('should return the ApiTodos.addEdit call', () => {
      assert.deepEqual(generator.next().value, call(ApiTodos.addEdit, action));
    });

    it('should return the TODOS_EDIT_SAVE action', () => {
      assert.deepEqual(generator.next(action.todo).value, put({
        type: 'TODOS_EDIT_SAVE',
        todo: action.todo,
      }));
    });

    it('should be finished', () => {
      generator.next();
      assert.equal(generator.next().done, true);
    });
  });

  describe('todosDelete()', () => {
    const action = {
      todo: {
        id: 1,
      },
    };
    const generator = todosDelete(action);
    generator.next();

    it('should return the ApiTodos.delete call', () => {
      assert.deepEqual(generator.next().value, call(ApiTodos.delete, action));
    });

    it('should return the TODOS_DELETE_SAVE action', () => {
      assert.deepEqual(generator.next().value, put({
        type: 'TODOS_DELETE_SAVE',
        todo: {
          id: action.todo.id,
        }
      }));
    });

    it('should be finished', () => {
      assert.equal(generator.next().done, true);
    });
  });
});
