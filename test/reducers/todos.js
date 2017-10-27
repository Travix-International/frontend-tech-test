import assert from "assert";
import todos from "../../src/reducers/todos";

// unit tests for the todos reducers
// mocha - http://mochajs.org/#getting-started
// assert - https://nodejs.org/api/assert.html#assert_assert_deepequal_actual_expected_message
describe('Todos reducer', () => {
  describe('TODOS_LIST_SAVE', () => {
    it('should return a list of todos', () => {
      assert.deepEqual(
        todos({}, {
          type: 'TODOS_LIST_SAVE',
          todos: [{
            id: 1,
            task: 'Some name',
          }],
        }), [{
          id: 1,
          task: 'Some name',
        }]
      );
    });
  });

  describe('TODOS_ADD_SAVE', () => {
    it('should return a new todo array element', () => {
      assert.deepEqual(
        todos([{
          id: 1,
          task: 'Some name',
        }], {
          type: 'TODOS_ADD_SAVE',
          todo: {
            id: 2,
            task: 'Other name',
          },
        }), [{
          id: 1,
          task: 'Some name',
        }, {
          id: 2,
          task: 'Other name',
        }]
      );
    });
  });

  describe('TODOS_EDIT_SAVE', () => {
    it('should return an edited todo array element', () => {
      assert.deepEqual(
        todos([{
          id: 1,
          task: 'Some name',
        }, {
          id: 2,
          task: 'Other name',
        }], {
          type: 'TODOS_EDIT_SAVE',
          todo: {
            id: 2,
            task: 'Changed name',
          },
        }), [{
          id: 1,
          task: 'Some name',
        }, {
          id: 2,
          task: 'Changed name',
        }]
      );
    });
  });

  describe('TODOS_DELETE_SAVE', () => {
    it('should return the todo array without the deleted element', () => {
      assert.deepEqual(
        todos([{
          id: 1,
          task: 'Some name',
        }, {
          id: 2,
          task: 'Other name',
        }], {
          type: 'TODOS_DELETE_SAVE',
          todo: {
            id: 2,
          },
        }), [{
          id: 1,
          task: 'Some name',
        }]
      );
    });
  });
});
