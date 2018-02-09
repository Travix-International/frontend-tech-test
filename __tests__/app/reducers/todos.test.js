import todos from '../../../src/javascript/reducers/todos';

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  it('should handle LIST_TODOS', () => {
    expect(todos([], {
      type: 'LIST_TODOS',
      todos: [
        {
          title: 'Todo title',
          description: 'Todo description',
          completed: false,
          id: 0,
        },
      ],
    })).toEqual([
      {
        title: 'Todo title',
        description: 'Todo description',
        completed: false,
        id: 0,
      },
    ]);

    expect(todos(
      [
        {
          title: 'Todo title',
          description: 'Todo description',
          completed: false,
          id: 0,
        },
        {
          title: 'Todo title 1',
          description: 'Todo description',
          completed: false,
          id: 1,
        },
      ],
      {
        type: 'LIST_TODOS',
        todos: [
          {
            title: 'Todo title 2',
            description: 'Todo description',
            completed: false,
            id: 2,
          },
        ],
      },
    )).toEqual([
      {
        title: 'Todo title',
        description: 'Todo description',
        completed: false,
        id: 0,
      },
      {
        title: 'Todo title 1',
        description: 'Todo description',
        completed: false,
        id: 1,
      },
      {
        title: 'Todo title 2',
        description: 'Todo description',
        completed: false,
        id: 2,
      },
    ]);

    expect(todos(
      [
        {
          title: 'Todo title',
          description: 'Todo description',
          completed: false,
          id: 0,
        },
        {
          title: 'Todo title 1',
          description: 'Todo description',
          completed: false,
          id: 1,
        },
        {
          title: 'Todo title 2',
          description: 'Todo description',
          completed: false,
          id: 2,
        },
      ],
      {
        type: 'LIST_TODOS',
        todos: [
          {
            title: 'Todo title 3',
            description: 'Todo description',
            completed: false,
            id: 3,
          },
        ],
      },
    )).toEqual([
      {
        title: 'Todo title',
        description: 'Todo description',
        completed: false,
        id: 0,
      },
      {
        title: 'Todo title 1',
        description: 'Todo description',
        completed: false,
        id: 1,
      },
      {
        title: 'Todo title 2',
        description: 'Todo description',
        completed: false,
        id: 2,
      },
      {
        title: 'Todo title 3',
        description: 'Todo description',
        completed: false,
        id: 3,
      },
    ]);
  });

  it('should handle LIST_TODO', () => {
    expect(todos(
      [
        {
          title: 'Todo title',
          description: 'Todo description',
          completed: false,
          id: 0,
        },
        {
          title: 'Todo title 1',
          description: 'Todo description',
          completed: true,
          id: 1,
        },
      ],
      {
        type: 'LIST_TODO',
        id: 1,
      },
    )).toEqual([
      {
        title: 'Todo title 1',
        description: 'Todo description',
        completed: true,
        id: 1,
      },
    ]);

    expect(todos(
      [
        {
          title: 'Todo title',
          description: 'Todo description',
          completed: false,
          id: 0,
        },
        {
          title: 'Todo title 1',
          description: 'Todo description',
          completed: true,
          id: 1,
        },
      ],
      {
        type: 'LIST_TODO',
        id: 0,
      },
    )).toEqual([
      {
        title: 'Todo title',
        description: 'Todo description',
        completed: false,
        id: 0,
      },
    ]);
  });

  it('should handle CREATE_TODO', () => {
    expect(todos([], {
      type: 'CREATE_TODO',
      todo: {
        title: 'Todo title',
        description: 'Todo description',
        completed: false,
        id: 0,
      },
    })).toEqual([
      {
        title: 'Todo title',
        description: 'Todo description',
        completed: false,
        id: 0,
      },
    ]);

    expect(todos(
      [
        {
          title: 'Todo title',
          description: 'Todo description',
          completed: false,
          id: 0,
        },
      ],
      {
        type: 'CREATE_TODO',
        todo: {
          title: 'Todo title 1',
          description: 'Todo description',
          completed: false,
          id: 1,
        },
      },
    )).toEqual([
      {
        title: 'Todo title',
        description: 'Todo description',
        completed: false,
        id: 0,
      },
      {
        title: 'Todo title 1',
        description: 'Todo description',
        completed: false,
        id: 1,
      },
    ]);

    expect(todos(
      [
        {
          title: 'Todo title',
          description: 'Todo description',
          completed: false,
          id: 0,
        },
        {
          title: 'Todo title 1',
          description: 'Todo description',
          completed: false,
          id: 1,
        },
      ],
      {
        type: 'CREATE_TODO',
        todo: {
          title: 'Todo title 2',
          description: 'Todo description',
          completed: false,
          id: 2,
        },
      },
    )).toEqual([
      {
        title: 'Todo title',
        description: 'Todo description',
        completed: false,
        id: 0,
      },
      {
        title: 'Todo title 1',
        description: 'Todo description',
        completed: false,
        id: 1,
      },
      {
        title: 'Todo title 2',
        description: 'Todo description',
        completed: false,
        id: 2,
      },
    ]);
  });

  it('should handle EDIT_TODO_TITLE', () => {
    expect(todos(
      [
        {
          title: 'Todo title',
          description: 'Todo description',
          completed: false,
          id: 0,
        },
        {
          title: 'Todo title 1',
          description: 'Todo description',
          completed: false,
          id: 1,
        },
      ],
      {
        type: 'EDIT_TODO_TITLE',
        todo: {
          title: 'Todo title 2',
          description: 'Todo description',
          completed: false,
          id: 1,
        },
      },
    )).toEqual([
      {
        title: 'Todo title',
        description: 'Todo description',
        completed: false,
        id: 0,
      },
      {
        title: 'Todo title 2',
        description: 'Todo description',
        completed: false,
        id: 1,
      },
    ]);
  });

  it('should handle EDIT_TODO_DESCRIPTION', () => {
    expect(todos(
      [
        {
          title: 'Todo title',
          description: 'Todo description',
          completed: false,
          id: 0,
        },
        {
          title: 'Todo title 1',
          description: 'Todo description',
          completed: false,
          id: 1,
        },
      ],
      {
        type: 'EDIT_TODO_DESCRIPTION',
        todo: {
          title: 'Todo title 1',
          description: 'This is a new description',
          id: 1,
          completed: false,
        },
      },
    )).toEqual([
      {
        title: 'Todo title',
        description: 'Todo description',
        completed: false,
        id: 0,
      },
      {
        title: 'Todo title 1',
        description: 'This is a new description',
        completed: false,
        id: 1,
      },
    ]);
  });

  it('should handle TOGGLE_TODO', () => {
    expect(todos(
      [
        {
          title: 'Todo title',
          description: 'Todo description',
          completed: false,
          id: 0,
        },
        {
          title: 'Todo title 2',
          description: 'Todo description',
          completed: false,
          id: 1,
        },
      ],
      {
        type: 'TOGGLE_TODO',
        todo: {
          title: 'Todo title 2',
          description: 'Todo description',
          completed: false,
          id: 1,
        },
      },
    )).toEqual([
      {
        title: 'Todo title',
        description: 'Todo description',
        completed: false,
        id: 0,
      },
      {
        title: 'Todo title 2',
        description: 'Todo description',
        completed: false,
        id: 1,
      },
    ]);

    expect(todos(
      [
        {
          title: 'Todo title',
          description: 'Todo description',
          completed: false,
          id: 0,
        },
        {
          title: 'Todo title 2',
          description: 'Todo description',
          completed: true,
          id: 1,
        },
      ],
      {
        type: 'TOGGLE_TODO',
        todo: {
          title: 'Todo title 2',
          description: 'Todo description',
          completed: false,
          id: 1,
        },
      },
    )).toEqual([
      {
        title: 'Todo title',
        description: 'Todo description',
        completed: false,
        id: 0,
      },
      {
        title: 'Todo title 2',
        description: 'Todo description',
        completed: false,
        id: 1,
      },
    ]);
  });

  it('should handle DELETE_TODO', () => {
    expect(todos(
      [
        {
          title: 'Todo title',
          description: 'Todo description',
          completed: false,
          id: 0,
        },
        {
          title: 'Todo title 2',
          description: 'Todo description',
          completed: true,
          id: 1,
        },
        {
          title: 'Todo title 3',
          description: 'Todo description',
          completed: true,
          id: 2,
        },
      ],
      {
        type: 'DELETE_TODO',
        todo: { id: 2 },
      },
    )).toEqual([
      {
        title: 'Todo title',
        description: 'Todo description',
        completed: false,
        id: 0,
      },
      {
        title: 'Todo title 2',
        description: 'Todo description',
        completed: true,
        id: 1,
      },
    ]);

    expect(todos(
      [
        {
          title: 'Todo title',
          description: 'Todo description',
          completed: false,
          id: 0,
        },
        {
          title: 'Todo title 2',
          description: 'Todo description',
          completed: true,
          id: 1,
        },
      ],
      {
        type: 'DELETE_TODO',
        todo: { id: 1 },
      },
    )).toEqual([
      {
        title: 'Todo title',
        description: 'Todo description',
        completed: false,
        id: 0,
      },
    ]);
  });
});
