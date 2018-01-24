import { fromJS, is, Map } from 'immutable'
import { put, call } from 'redux-saga/effects'
import * as matchers from 'jest-immutable-matchers'

import reducer, {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  LOAD_TODOS,
  addTodo,
  completeTodo,
  deleteTodo,
  loadTodos,
  createTodoSaga,
  completeTodoSaga,
  deleteTodoSaga,
  loadTodosSaga,
} from 'redux/ducks/todos'

describe('todos duck', () => {
  beforeAll(() => {
    jest.addMatchers(matchers)
  })

  describe('actions', () => {
    it('completeTodo', () => {
      const fixture = { id: '1337' }
      const expected = {
        type: COMPLETE_TODO.ACTION,
        payload: fixture,
      }

      expect(completeTodo(fixture)).toEqual(expected)
    })

    it('deleteTodo', () => {
      const fixture = { id: '1337' }
      const expected = {
        type: DELETE_TODO.ACTION,
        payload: fixture,
      }

      expect(deleteTodo(fixture)).toEqual(expected)
    })

    it('addTodo', () => {
      const fixture = { id: '1337' }
      const expected = {
        type: ADD_TODO.ACTION,
        payload: fixture,
      }

      expect(addTodo(fixture)).toEqual(expected)
    })

    it('loadTodos', () => {
      const expected = {
        type: LOAD_TODOS.ACTION,
      }

      expect(loadTodos()).toEqual(expected)
    })
  })

  describe('reducer', () => {
    const fixture1 = { id: '1' }
    const fixture2 = { id: '2' }
    const fixture3 = { id: '3' }

    let initialState

    beforeAll(() => {
      initialState = fromJS({
        items: [
          { title: 'Create a To-do app', description: 'Use all you know about react/redux to do so!', id: '1', done: false },
          { title: 'Create a Pull Request', description: 'Submit yoursolution for review!', id: '2', done: true },
          { title: 'Eat!', description: 'It\'s apparently quite important', id: '3', done: false },
          { title: 'Rest!', description: 'Like eating, it seems like this is also really important', id: '4', done: false },
          { title: 'Have social life!', description: 'Ok, now we\'re just being ridiculous...', id: '5', done: true },
          { title: 'Work!', description: 'THERE\'S NOT ENOUGH TIME!', id: '6', done: false },
        ],
      })
    })

    it('should return initial immutable state', () => {
      expect(reducer(undefined, {})).toBeImmutableMap()
    })

    it('should handle addTodo', () => {
      const newTodo = Map({ title: 'I am new!', description: 'Just created!', id: 7, done: false })
      const getExpected = fixture => (
        initialState.set('items', initialState.get('items').insert(0, fixture))
      )

      expect(is(reducer(initialState, {
        type: ADD_TODO.SUCCESS,
        payload: newTodo,
      }), getExpected(newTodo))).toEqual(true)
    })

    it('should handle completeTodo', () => {
      const getExpected = fixture => (
        initialState.set('items', initialState.get('items').map((item) => {
          if (item.get('id') !== fixture.get('id')) { return item }
          return item.set('done', !item.get('done'))
        }))
      )

      expect(reducer(initialState, {
        type: COMPLETE_TODO.SUCCESS,
        payload: Map(fixture1),
      })).toEqual(getExpected(Map(fixture1)))
      expect(reducer(initialState, {
        type: COMPLETE_TODO.SUCCESS,
        payload: Map(fixture2),
      })).toEqual(getExpected(Map(fixture2)))
      expect(reducer(initialState, {
        type: COMPLETE_TODO.SUCCESS,
        payload: Map(fixture3),
      })).toEqual(getExpected(Map(fixture3)))
    })

    it('should handle deleteTodo', () => {
      const getExpected = fixture => (
        initialState.set('items', initialState.get('items').filter(item => item.get('id') !== fixture.get('id')))
      )

      expect(reducer(initialState, {
        type: DELETE_TODO.SUCCESS,
        payload: Map(fixture1),
      })).toEqual(getExpected(Map(fixture1)))
      expect(reducer(initialState, {
        type: DELETE_TODO.SUCCESS,
        payload: Map(fixture2),
      })).toEqual(getExpected(Map(fixture2)))
      expect(reducer(initialState, {
        type: DELETE_TODO.SUCCESS,
        payload: Map(fixture3),
      })).toEqual(getExpected(Map(fixture3)))
    })

    it('should handle loadTodos', () => {
      const loadedTodos = fromJS([
        { title: 'Get the triforce of courage', description: 'Need it for kicking ass', id: 'hyrule-123', done: true },
        { title: 'Get the triforce of wisdow', description: 'Need it for solving puzzles', id: 'hyrule-124', done: true },
        { title: 'Get the triforce of power', description: 'Take it from that pig-face!', id: 'hyrule-125', done: false },
      ])
      const getExpected = fixture => initialState.set('items', fixture)

      expect(reducer(initialState, {
        type: LOAD_TODOS.SUCCESS,
        payload: loadedTodos,
      })).toEqual(getExpected(loadedTodos))
    })
  })

  describe('sagas', () => {
    describe('createTodoSaga', () => {
      const fixture = { payload: fromJS({}) }
      let generator

      beforeEach(() => {
        generator = createTodoSaga(fixture)
      })

      it('should call an api function and dispatch ADD_TODO.SUCCESS on success', () => {
        const callDescriptor = generator.next().value
        const response = { name: 'Link' }
        const putDescriptor = generator.next(response).value

        expect(callDescriptor).toMatchSnapshot()
        // eslint-disable-next-line
        expect(putDescriptor).toEqual(put({ type: ADD_TODO.SUCCESS, payload: fromJS(response) }))
      })

      it('should call ADD_TODO.ERROR on error', () => {
        const callDescriptor = generator.next().value
        const response = new Error('Ganon wins!')
        const putDescriptor = generator.throw(response).value

        expect(callDescriptor).toMatchSnapshot()
        // eslint-disable-next-line
        expect(putDescriptor).toEqual(put({ type: ADD_TODO.ERROR, payload: { error: response } }))
      })
    })

    describe('completeTodoSaga', () => {
      const fixture = { payload: fromJS({}) }
      let generator

      beforeEach(() => {
        generator = completeTodoSaga(fixture)
      })

      it('should call an api function and dispatch COMPLETE_TODO.SUCCESS on success', () => {
        const callDescriptor = generator.next().value
        const response = { name: 'Zelda' }
        const putDescriptor = generator.next(response).value

        expect(callDescriptor).toMatchSnapshot()
        // eslint-disable-next-line
        expect(putDescriptor).toEqual(put({ type: COMPLETE_TODO.SUCCESS, payload: fromJS(response) }))
      })

      it('should call COMPLETE_TODO.ERROR on error', () => {
        const callDescriptor = generator.next().value
        const response = new Error('Ganon wins!')
        const putDescriptor = generator.throw(response).value

        expect(callDescriptor).toMatchSnapshot()
        // eslint-disable-next-line
        expect(putDescriptor).toEqual(put({ type: COMPLETE_TODO.ERROR, payload: { error: response } }))
      })
    })

    describe('deleteTodoSaga', () => {
      const fixture = { payload: fromJS({}) }
      let generator

      beforeEach(() => {
        generator = deleteTodoSaga(fixture)
      })

      it('should call an api function and dispatch DELETE_TODO.SUCCESS on success', () => {
        const callDescriptor = generator.next().value
        const response = { name: 'Ganon' }
        const putDescriptor = generator.next(response).value

        expect(callDescriptor).toMatchSnapshot()
        // eslint-disable-next-line
        expect(putDescriptor).toEqual(put({ type: DELETE_TODO.SUCCESS, payload: fromJS(response) }))
      })

      it('should call DELETE_TODO.ERROR on error', () => {
        const callDescriptor = generator.next().value
        const response = new Error('Ganon wins!')
        const putDescriptor = generator.throw(response).value

        expect(callDescriptor).toMatchSnapshot()
        // eslint-disable-next-line
        expect(putDescriptor).toEqual(put({ type: DELETE_TODO.ERROR, payload: { error: response } }))
      })
    })

    describe('loadTodosSaga', () => {
      const fixture = { payload: fromJS({}) }
      let generator

      beforeEach(() => {
        generator = loadTodosSaga(fixture)
      })

      it('should call an api function and dispatch LOAD_TODOS.SUCCESS on success', () => {
        const callDescriptor = generator.next().value
        const response = { name: 'Ingo' }
        const putDescriptor = generator.next(response).value

        expect(callDescriptor).toMatchSnapshot()
        // eslint-disable-next-line
        expect(putDescriptor).toEqual(put({ type: LOAD_TODOS.SUCCESS, payload: fromJS(response) }))
      })

      it('should call LOAD_TODOS.ERROR on error', () => {
        const callDescriptor = generator.next().value
        const response = new Error('Ganon wins!')
        const putDescriptor = generator.throw(response).value

        expect(callDescriptor).toMatchSnapshot()
        // eslint-disable-next-line
        expect(putDescriptor).toEqual(put({ type: LOAD_TODOS.ERROR, payload: { error: response } }))
      })
    })
  })
})
