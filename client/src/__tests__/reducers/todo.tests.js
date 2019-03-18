import reducer from '../../reducers/todos';
import * as types from '../../actions/actionTypes';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_TODO_SAVED', () => {
    expect(
      reducer([], {
        type: types.ADD_TODO_SAVED,
        id: 1,
        description: 'description',
        title: 'title',
      }),
    ).toEqual([
      {
        completed: false,
        editable: false,
        id: 1,
        description: 'description',
        title: 'title',
      },
    ]);

    expect(
      reducer(
        [
          {
            id: 1,
            description: 'description',
            title: 'title',
          },
        ],
        {
          type: types.ADD_TODO_SAVED,
          id: 2,
          description: 'other description',
          title: 'other title',
        },
      ),
    ).toEqual([
      {
        id: 1,
        description: 'description',
        title: 'title',
      },
      {
        id: 2,
        description: 'other description',
        title: 'other title',
        completed: false,
        editable: false,
      },
    ]);
  });
  it('should handle REMOVE_TODO_DELETED', () => {
    expect(
      reducer(
        [
          {
            id: 1,
            description: 'description',
            title: 'title',
          },
        ],
        {
          type: types.REMOVE_TODO_DELETED,
          id: 1,
        },
      ),
    ).toEqual([]);
  });
  it('should handle FETCH_TODO_RECEIVED', () => {
    expect(
      reducer(
        [
          {
            id: 1,
            description: 'description',
            title: 'title',
          },
        ],
        {
          type: types.FETCH_TODO_RECEIVED,
          data: [
            {
              id: 2,
              description: 'description 2',
              title: 'title 2',
            },
            {
              id: 3,
              description: 'description 3',
              title: 'title 3',
            },
          ],
        },
      ),
    ).toEqual([
      {
        id: 1,
        description: 'description',
        title: 'title',
      },
      {
        id: 2,
        description: 'description 2',
        title: 'title 2',
        completed: false,
        editable: false,
      },
      {
        id: 3,
        description: 'description 3',
        title: 'title 3',
        completed: false,
        editable: false,
      },
    ]);
  });
  it('should handle TOGGLE_TODO', () => {
    expect(
      reducer(
        [
          {
            id: 1,
            description: 'description',
            title: 'title',
            completed: false,
          },
        ],
        {
          type: types.TOGGLE_TODO,
          id: 1,
        },
      ),
    ).toEqual([
      {
        id: 1,
        description: 'description',
        title: 'title',
        completed: true,
      },
    ]);
  });

  it('should handle SAVE_TODO_SAVED', () => {
    expect(
      reducer(
        [
          {
            id: 1,
            description: 'description',
            title: 'title',
            editable: true,
          },
        ],
        {
          type: types.SAVE_TODO_SAVED,
          id: 1,
          title: 'new title',
          description: 'new description',
        },
      ),
    ).toEqual([
      {
        id: 1,
        description: 'new description',
        title: 'new title',
        editable: false,
      },
    ]);
  });
  it('should handle EDIT_TODO', () => {
    expect(
      reducer(
        [
          {
            id: 1,
            description: 'description',
            title: 'title',
            editable: false,
          },
        ],
        {
          type: types.EDIT_TODO,
          id: 1,
        },
      ),
    ).toEqual([
      {
        id: 1,
        description: 'description',
        title: 'title',
        editable: true,
      },
    ]);
  });
});
