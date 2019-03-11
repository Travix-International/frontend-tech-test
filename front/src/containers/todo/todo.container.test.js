import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { ToDoContainer, mapStateToProps, mapDispatchToProps } from './todo.container'

let options  = {}
describe('ToDoContainerComponent', () => {
  beforeEach(() => {
    options = {
      getItems: jest.fn(),
      insertOrUpdateItem: jest.fn(),
      deleteItem: jest.fn(),
      items: {
        data: [],
        loading: false,
        error: ''
      }
    }
  })
  it('Snapshot with loading', async () => {
    options.items.loading = true
    const tree = shallow(<ToDoContainer {...options} />)
    expect(toJson(tree)).toMatchSnapshot()
  })
  it('Snapshot with error', async () => {
    options.items.error = 'Error Network'
    const tree = shallow(<ToDoContainer {...options} />)
    expect(toJson(tree)).toMatchSnapshot()
  })
  it('getItems function', async () => {
    shallow(<ToDoContainer {...options} />)
    expect(options.getItems).toHaveBeenCalled()
  })
  it('handleSaveItem', async () => {
    const item = {
      id: 'asd',
      title: 'title',
      description: 'description'
    }
    const tree = shallow(<ToDoContainer {...options} />)
    const instance = tree.instance()
    instance.handleSaveItem(item)
    expect(options.insertOrUpdateItem).toHaveBeenCalledWith(item)
  })
  it('handleRemoveItem', async () => {
    const id = 'asd'
    const tree = shallow(<ToDoContainer {...options} />)
    const instance = tree.instance()
    instance.handleRemoveItem(id)
    expect(options.deleteItem).toHaveBeenCalledWith(id)
  })
  it('execute maps methods', () => {
    mapStateToProps({
      items: {
        data: []
      }
    })
    mapDispatchToProps({})
  })
})
