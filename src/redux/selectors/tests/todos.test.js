import { fromJS } from 'immutable'

import {
  selectTodos,
  makeSelectTodos,
} from 'redux/selectors/todos'

describe('selectTodos', () => {
  it('should select the settings domain', () => {
    const todosState = fromJS({
      items: [],
    })
    const mockedState = fromJS({
      resources: {
        todos: todosState,
      },
    })

    expect(selectTodos(mockedState)).toEqual(todosState)
  })
})

describe('makeSelectTodos', () => {
  const todosSelector = makeSelectTodos()
  const items = [
    { title: 'Workout', description: 'Once in a while', id: 1, done: false },
    { title: 'Eat', description: 'To your heart\'s content', id: 2, done: true },
    { title: 'Procrastinate', description: 'You deserve it!', id: 3, done: true },
    { title: 'Pay bills', description: 'Before they grow more!', id: 4, done: false },
  ]

  const mockedState = fromJS({
    resources: {
      todos: { items },
    },
  })

  it('should select all todos', () => {
    expect(todosSelector(mockedState, {})).toEqual(fromJS(items))
  })

  it('should select all active (undone) todos', () => {
    const filter = 'active'
    const props = {
      match: {
        params: { filter },
      },
    }
    const expected = mockedState.getIn(['resources', 'todos', 'items']).filter(item => !item.get('done'))

    expect(todosSelector(mockedState, props)).toEqual(expected)
  })

  it('should select all completed (done) todos', () => {
    const filter = 'done'
    const props = {
      match: {
        params: { filter },
      },
    }
    const expected = mockedState.getIn(['resources', 'todos', 'items']).filter(item => item.get('done'))

    expect(todosSelector(mockedState, props)).toEqual(expected)
  })
})
