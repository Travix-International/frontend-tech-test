import React from 'react'
import PropTypes from 'prop-types'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import { fromJS } from 'immutable'
import { MemoryRouter } from 'react-router-dom'

import ConnectedToDos, { ToDos } from 'containers/ToDos/ToDos'

describe('<ToDos />', () => {
  const initialState = fromJS({
    resources: {
      todos: {
        items: [
          { title: 'A todo', description: 'Do me!', id: '1', done: false },
          { title: 'A todo', description: 'Do me!', id: '2', done: true },
          { title: 'A todo', description: 'Do me!', id: '3', done: false },
          { title: 'A todo', description: 'Do me!', id: '4', done: true },
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
      handleSubmit={noop}
      requestTodos={noop}
      todos={initialState.getIn(['resources', 'todos', 'items'])}
    />)

    expect(wrapper.find('TodoList')).toHaveLength(1)
  })

  it('should render the <MainNav /> component', () => {
    const noop = jest.fn()
    const wrapper = shallow(<ToDos
      handleComplete={noop}
      handleDelete={noop}
      handleEdit={noop}
      handleSubmit={noop}
      requestTodos={noop}
      todos={initialState.getIn(['resources', 'todos', 'items'])}
    />)

    expect(wrapper.find('MainNav')).toHaveLength(1)
  })

  it('props should match mapStateToProps', () => {
    const wrapper = shallow(<ConnectedToDos store={store} />)

    expect(wrapper.prop('todos')).toEqual(initialState.getIn(['resources', 'todos', 'items']))
  })

  it('props should match mapDispatchToProps', () => {
    const wrapper = mount(
      <MemoryRouter>
        <ConnectedToDos />
      </MemoryRouter>,
      {
        context: { store },
        childContextTypes: { store: PropTypes.object.isRequired },
      },
    )

    wrapper.find('input[type="checkbox"]').first().simulate('change')
    wrapper.find('form').simulate('submit')
    wrapper.find('Icon[name="DELETE"]').first().simulate('click')
    wrapper.find('Icon[name="EDIT"]').first().simulate('click')

    const actions = store.getActions()
    const todosActions = actions.filter(action => action.type.includes('/todos/'))

    expect(todosActions).toHaveLength(5)
  })

  it('should update only when todos or match props has changed', () => {
    const noop = jest.fn()
    const wrapper = shallow(<ToDos
      handleComplete={noop}
      handleDelete={noop}
      handleEdit={noop}
      handleSubmit={noop}
      requestTodos={noop}
      todos={fromJS([])}
    />)
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ todos: initialState.getIn(['resources', 'todos', 'items']) })
    const shouldNotUpdate = wrapper.instance().shouldComponentUpdate({ todos: fromJS([]) })

    expect(shouldUpdate).toBe(true)
    expect(shouldNotUpdate).toBe(false)
  })
})
