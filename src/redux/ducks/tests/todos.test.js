import { fromJS, Map } from 'immutable'
import * as matchers from 'jest-immutable-matchers'

import reducer, {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  addTodo,
  completeTodo,
  deleteTodo,
  editTodo,
} from 'redux/ducks/todos'

describe('todos duck', () => {
  beforeAll(() => {
    jest.addMatchers(matchers)
  })

  describe('actions', () => {
    it('completeTodo', () => {
      const fixture = { id: 1337 }
      const expected = {
        type: COMPLETE_TODO.SUCCESS,
        payload: fixture,
      }

      expect(completeTodo(fixture)).toEqual(expected)
    })

    it('deleteTodo', () => {
      const fixture = { id: 1337 }
      const expected = {
        type: DELETE_TODO.SUCCESS,
        payload: fixture,
      }

      expect(deleteTodo(fixture)).toEqual(expected)
    })

    it('editTodo', () => {
      const fixture = { id: 1337 }
      const expected = {
        type: EDIT_TODO.SUCCESS,
        payload: fixture,
      }

      expect(editTodo(fixture)).toEqual(expected)
    })

    it('addTodo', () => {
      const fixture = { id: 1337 }
      const expected = {
        type: ADD_TODO.SUCCESS,
        payload: fixture,
      }

      expect(addTodo(fixture)).toEqual(expected)
    })
  })

  describe('reducer', () => {
    const fixture1 = { id: 1 }
    const fixture2 = { id: 2 }
    const fixture3 = { id: 3 }

    let initialState

    beforeAll(() => {
      initialState = fromJS({
        items: [
          { title: 'Create a To-do app', description: 'Use all you know about react/redux to do so!', id: 1, done: false },
          { title: 'Create a Pull Request', description: 'Submit yoursolution for review!', id: 2, done: true },
          { title: 'Eat!', description: 'It\'s apparently quite important', id: 3, done: false },
          { title: 'Rest!', description: 'Like eating, it seems like this is also really important', id: 4, done: false },
          { title: 'Have social life!', description: 'Ok, now we\'re just being ridiculous...', id: 5, done: true },
          { title: 'Work!', description: 'THERE\'S NOT ENOUGH TIME!', id: 6, done: false },
        ],
      })
    })

    it('should return initial immutable state', () => {
      expect(reducer(undefined, {})).toBeImmutableMap()
    })

    it('should handle addTodo', () => {
      const newTodo = { title: 'I am new!', description: 'Just created!', id: 7, done: false }
      const getExpected = fixture => (
        initialState.set('items', initialState.get('items').insert(0, Map(fixture)))
      )

      expect(reducer(undefined, addTodo(newTodo))).toEqual(getExpected(newTodo))
    })

    it('should handle completeTodo', () => {
      const getExpected = fixture => (
        initialState.set('items', initialState.get('items').map((item) => {
          if (item.get('id') !== fixture.id) { return item }
          return item.set('done', !item.get('done'))
        }))
      )

      expect(reducer(undefined, completeTodo(fixture1))).toEqual(getExpected(fixture1))
      expect(reducer(undefined, completeTodo(fixture2))).toEqual(getExpected(fixture2))
      expect(reducer(undefined, completeTodo(fixture3))).toEqual(getExpected(fixture3))
    })

    it('should handle deleteTodo', () => {
      const getExpected = fixture => (
        initialState.set('items', initialState.get('items').filter(item => item.get('id') !== fixture.id))
      )

      expect(reducer(undefined, deleteTodo(fixture1))).toEqual(getExpected(fixture1))
      expect(reducer(undefined, deleteTodo(fixture2))).toEqual(getExpected(fixture2))
      expect(reducer(undefined, deleteTodo(fixture3))).toEqual(getExpected(fixture3))
    })

    it('should handle editTodo', () => {
      const editedTodo = { title: 'I have changed', description: 'New year, new me', id: 1, done: true }
      const getExpected = (fixture) => {
        const index = initialState.get('items').findIndex(item => item.get('id') === fixture.id)
        return initialState.set('items', initialState.get('items').set(index, fromJS(fixture)))
      }

      expect(reducer(undefined, editTodo(editedTodo))).toEqual(getExpected(editedTodo))
    })
  })
})
