import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import Todo from './todo'

let options  = {}
describe('ToDoComponent', () => {
  beforeEach(() => {
    options = {
      handleSaveItem: jest.fn(),
      handleRemoveItem: jest.fn(),
      items: []
    }
  })
  it('Snapshot with empty list', async () => {
    const tree = shallow(<Todo {...options} />)
    expect(toJson(tree)).toMatchSnapshot()
  })
  it('Snapshot with list', async () => {
    options.items = [{
      id: 'asd',
      title: 'title',
      description: 'description'
    }]
    const tree = shallow(<Todo {...options} />)
    expect(toJson(tree)).toMatchSnapshot()
  })
  it('open and close modal function', async () => {
    options.items = [{
      id: 'asd',
      title: 'title',
      description: 'description'
    }]
    const tree = shallow(<Todo {...options} />)
    const instance = tree.instance()
    expect(instance.state.isOpenModal).toBeFalsy()
    instance.handleOpenModal()
    expect(instance.state.isOpenModal).toBeTruthy()
    instance.handleCloseModal()
    expect(instance.state.isOpenModal).toBeFalsy()
  })
  it('edit item', async () => {
    options.items = [{
      id: 'asd',
      title: 'title',
      description: 'description'
    }]
    const emptyValues = { id: 0, title: '', description: ''}
    const tree = shallow(<Todo {...options} />)
    const instance = tree.instance()
    expect(instance.state.item).toEqual(emptyValues)
    instance.handleClickEdit(options.items[0])()
    expect(instance.state.item).toEqual(options.items[0])
    instance.cleanValuesItem()
    expect(instance.state.item).toEqual(emptyValues)
  })
  it('change item value', async () => {
    const newTitle = 'test'
    options.items = [{
      id: 'asd',
      title: 'title',
      description: 'description'
    }]
    const tree = shallow(<Todo {...options} />)
    const instance = tree.instance()
    instance.handleClickEdit(options.items[0])()
    instance.handleChangeInput('title')({target:{ value: newTitle}})
    expect(instance.state.item.title).toEqual(newTitle)
  })
  it('save item', async () => {
    options.items = [{
      id: 'asd',
      title: 'title',
      description: 'description'
    }]
    const tree = shallow(<Todo {...options} />)
    const instance = tree.instance()
    instance.handleClickEdit(options.items[0])()
    instance.handleSaveItem()
    expect(options.handleSaveItem).toHaveBeenCalledWith(options.items[0])
  })
  it('delete item', async () => {
    const id = 'asd'
    options.items = [{
      id,
      title: 'title',
      description: 'description'
    }]
    const tree = shallow(<Todo {...options} />)
    const instance = tree.instance()
    instance.handleRemoveItem(id)()
    expect(options.handleRemoveItem).toHaveBeenCalledWith(id)
  })
  it('execute onCloseModal', async () => {
    const id = 'asd'
    options.items = [{
      id,
      title: 'title',
      description: 'description'
    }]
    const tree = mount(<Todo {...options} />)
    const instance = tree.instance()
    instance.handleOpenModal()
    tree.update()
    expect(instance.state.isOpenModal).toBeTruthy()
    tree.find('ModalContainer').simulate('click')
    expect(instance.state.isOpenModal).toBeFalsy()
  })
})
