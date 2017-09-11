import { normalize } from 'normalizr';
import * as schema from '../epics/schema';

import todos from './todos'
import {
  RECEIVE_TODOS,
  RECEIVE_TODO_ADD,
  RECEIVE_TODO_DELETE,
  RECEIVE_TODO_UPDATE,
  RECEIVE_NEXT_TODOS,
} from '../constants';

describe('todos reducer', () => {
  let todo, todoID = 49;
  const pagination = {
    page: 1,
    pageSize: 10,
    total: 1
  }
  beforeEach(() => {
    todo = {
      id: todoID,
      title: 'Maecenas neque imperdiet lorem aliquam.',
      description: 'Dignissim ultrices nulla mattis auctor proin arcu. Etiam commodo sed augue ornare tristique elit consequat tempor nam lacinia non vitae aliquam ultrices tincidunt adipiscing au.',
      completed: false
    }
  });

  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual({
      allIds: [],
      byId: {},
      pagination: {
        page: 1,
        pageSize: 10,
        total: 1
      }
    });
  });

  it(`should handle ${RECEIVE_TODOS}`, () => {
    const payload = {
      ...normalize([todo], schema.arrayOfTodos),
      pagination: pagination
    };
    expect(
      todos({}, { type: RECEIVE_TODOS, payload })
    ).toEqual({
      allIds: [todoID],
      byId: { [todoID]: todo },
      pagination
    });
  });

  it(`should handle ${RECEIVE_TODO_ADD}`, () => {
    expect(
      todos({
        allIds: [todoID],
        byId: { [todoID]: todo },
        pagination
      }, { type: RECEIVE_TODO_ADD, payload: { ...todo, id: 50 } })
    ).toEqual({
      allIds: [50, todoID],
      byId: { '50': { ...todo, id: 50 }, [todoID]: todo },
      pagination
    });
  });

  it(`should handle ${RECEIVE_TODO_DELETE}`, () => {
    expect(
      todos({
        allIds: [todoID],
        byId: { [todoID]: todo },
        pagination
      }, { type: RECEIVE_TODO_DELETE, id: todoID })
    ).toEqual({
      allIds: [],
      byId: { [todoID]: todo },
      pagination: { ...pagination, total: pagination.total -1}
    });
  });

  it(`should handle ${RECEIVE_TODO_UPDATE}`, () => {
    expect(
      todos({
        allIds: [todoID],
        byId: { [todoID]: todo },
        pagination
      }, { type: RECEIVE_TODO_UPDATE, payload: { ...todo, title: 'test' } })
    ).toEqual({
      allIds: [todoID],
      byId: { [todoID]: { ...todo, title: 'test' } },
      pagination
    });
  });

  it(`should handle ${RECEIVE_NEXT_TODOS}`, () => {
    const payload = {
      ...normalize([{...todo, id: 50}], schema.arrayOfTodos),
      pagination: { ...pagination, page: 2 }
    };
    expect(
      todos({
        allIds: [todoID],
        byId: { [todoID]: todo },
        pagination
      }, { type: RECEIVE_NEXT_TODOS, payload })
    ).toEqual({
      allIds: [todoID, 50],
      byId: { [todoID]: todo, '50': { ...todo, id: 50 } },
      pagination: { ...pagination, page: 2 }
    });
  });
});
