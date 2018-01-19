import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import { fromJS } from 'immutable'

import ConnectedToDos, { ToDos } from 'containers/ToDos/ToDos'

describe('<ToDos />', () => {
  const initialState = fromJS({
    resources: {
      todos: {
        items: [
          { title: 'A todo', description: 'Do me!', id: 1, done: false },
          { title: 'A todo', description: 'Do me!', id: 2, done: true },
          { title: 'A todo', description: 'Do me!', id: 3, done: false },
          { title: 'A todo', description: 'Do me!', id: 4, done: true },
        ],
      },
    },
  })

  let mockStore
  let store

  beforeAll(() => {
    mockStore = configureStore([])
    store = mockStore(initialState)
  })

  it('should render <TodoList />', () => {
    const noop = jest.fn()
    const wrapper = shallow(<ToDos
      handleComplete={noop}
      handleDelete={noop}
      handleEdit={noop}
      todos={initialState.getIn(['resources', 'todos', 'items'])}
    />)

    expect(wrapper.find('TodoList')).toHaveLength(1)
  })

  it('props should match mapStateToProps', () => {
    const wrapper = shallow(<ConnectedToDos store={store} />)

    expect(wrapper.prop('todos')).toEqual(initialState.getIn(['resources', 'todos', 'items']))
  })

  it('props should match mapDispatchToProps', () => {
    const wrapper = mount(<ConnectedToDos store={store} />)

    wrapper.find('input').first().simulate('change')
    wrapper.find('Icon[name="DELETE"]').first().simulate('click')

    const actions = store.getActions()

    expect(actions).toHaveLength(2)
  })
})
