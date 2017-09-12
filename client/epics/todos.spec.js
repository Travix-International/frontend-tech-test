import nock from 'nock';
import { ActionsObservable } from 'redux-observable'
import { normalize } from 'normalizr';

import * as schema from './schema';
import { fetchTodos$, fetchNextTodos$, fetchTodo$, addTodo$, deleteTodo$, updateTodo$ } from './todos';
import { requestTodos, requestNextTodos, requestTodo, requestAddTodo, requestDeleteTodo, requestUpdateTodo } from '../actions/todos';
import { RECEIVE_TODOS, RECEIVE_NEXT_TODOS, RECEIVE_TODO, RECEIVE_TODO_ADD, RECEIVE_TODO_DELETE, RECEIVE_TODO_UPDATE } from '../constants';
import { API_URL } from './apiCaller';

describe('todos epic', () => {
  let todo, todoID = 49;

   beforeEach(() => {
     todo = {
       id: todoID,
       title: 'Maecenas neque imperdiet lorem aliquam.',
       description: 'Dignissim ultrices nulla mattis auctor proin arcu. Etiam commodo sed augue ornare tristique elit consequat tempor nam lacinia non vitae aliquam ultrices tincidunt adipiscing au.',
       completed: false
     }
   });

   afterEach(() => {
    nock.cleanAll();
  });

  describe('fetchTodos', () => {
    it('should fetch all todos', () => {
      const payload = { tasks: [todo] };

      nock(`${API_URL}/`)
        .get('/tasks')
        .reply(200, payload);

      const actions$ = ActionsObservable.of(requestTodos());

      return fetchTodos$(actions$).toPromise()
         .then((actionReceived) => {
           expect(actionReceived.type).toBe(RECEIVE_TODOS)
           expect(actionReceived.payload).toEqual({
             ...normalize(payload.tasks, schema.arrayOfTodos),
             pagination: actionReceived.pagination
           })
           return null;
         })
    });
  });

  describe('fetchNextTodos', () => {
    it('should fetch next todos', () => {
      const payload = { tasks: [todo] };

      nock(`${API_URL}/`)
        .get('/tasks?page=2')
        .reply(200, payload);

      const actions$ = ActionsObservable.of(requestNextTodos(2));

      return fetchNextTodos$(actions$).toPromise()
         .then((actionReceived) => {
           expect(actionReceived.type).toBe(RECEIVE_NEXT_TODOS)
           expect(actionReceived.payload).toEqual({
             ...normalize(payload.tasks, schema.arrayOfTodos),
             pagination: actionReceived.pagination
           })
           return null;
         })
    });
  });

  describe('fetchTodo', () => {
    it('should fetch todo', () => {
      const payload = { task: todo };

      nock(`${API_URL}/`)
        .get(`/task/${todoID}`)
        .reply(200, payload);

      const actions$ = ActionsObservable.of(requestTodo(todoID));

      return fetchTodo$(actions$).toPromise()
         .then((actionReceived) => {
           expect(actionReceived.type).toBe(RECEIVE_TODO)
           expect(actionReceived.payload).toEqual(todo)
           return null;
         })
    });
  });

  describe('addTodo', () => {
    it('should add todo', () => {
      const payload = { task: todo };

      nock(`${API_URL}/`)
        .post(`/task/create/${encodeURI(todo.title)}/${encodeURI(todo.description)}`)
        .reply(201, payload);

      const actions$ = ActionsObservable.of(requestAddTodo({ title: todo.title, description: todo.description }));

      return addTodo$(actions$).toPromise()
         .then((actionReceived) => {
           expect(actionReceived.type).toBe(RECEIVE_TODO_ADD)
           expect(actionReceived.payload).toEqual(todo)
           return null;
         })
    });
  });

  describe('deleteTodo', () => {
    it('should delete todo', () => {
      const payload = { id: todoID };

      nock(`${API_URL}/`)
        .delete(`/task/delete/${todoID}`)
        .reply(200, payload);

      const actions$ = ActionsObservable.of(requestDeleteTodo(todoID));

      return deleteTodo$(actions$).toPromise()
         .then((actionReceived) => {
           expect(actionReceived.type).toBe(RECEIVE_TODO_DELETE)
           expect(actionReceived.id).toEqual(todoID)
           return null;
         })
    });
  });

  describe('updateTodo', () => {
    it('should update todo', () => {
      const payload = { task: todo };
      nock(`${API_URL}/`)
        .put(`task/update/${todo.id}/${encodeURI(todo.title)}/${encodeURI(todo.description)}/${todo.completed}`)
        .reply(200, payload);

      const actions$ = ActionsObservable.of(requestUpdateTodo(todo));

      return updateTodo$(actions$).toPromise()
         .then((actionReceived) => {
           expect(actionReceived.type).toBe(RECEIVE_TODO_UPDATE)
          //  expect(actionReceived.payload).toEqual(todo)
           return null;
         })
    });
  });
});
