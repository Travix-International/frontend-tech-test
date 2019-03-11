import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Card from '../../components/card'
import Grid from '../../components/grid'
import GridItem from '../../components/grid-item'
import Empty from '../../components/empty'
import CircleButton from '../../components/circle-button'
import Modal from '../../components/modal'
import ToDoForm from './components/todo-form'
import Button from './components/button'
import Title from './components/title'

class ToDoComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpenModal: false,
      item: {
        title: '',
        description: '',
        id: 0
      }
    }
  }

  cleanValuesItem = () => {
    this.setState({ item: { title: '', description: '', id: 0 } })
  }

  handleCloseModal = () => {
    this.setState({ isOpenModal: false})
    this.cleanValuesItem()
  }

  handleOpenModal = () => {
    this.setState({ isOpenModal: true})
  }

  handleClickEdit = (item) => {
    return () => {
      this.setState({ item })
      this.handleOpenModal()
    }
  }

  handleChangeInput = (prop) => {
    return (e) => {
      this.setState({
        item: {
          ...this.state.item,
          [prop]: e.target.value
        }
      })
    }
  }

  handleSaveItem = () => {
    const { item } = this.state
    const { handleSaveItem } = this.props
    handleSaveItem(item)
    this.handleCloseModal()
  }

  handleRemoveItem = (id) => {
    const { handleRemoveItem } = this.props
    return () => {
      handleRemoveItem(id)
    }
  }

  render() {
    const { isOpenModal, item } = this.state
    const { items } = this.props
    return (
      <Fragment>
        <Card>
          <Title>ToDo</Title>
          {items.length > 0 ? this.renderGrid() : <Empty />}
        </Card>
        <Button>
          <CircleButton onClick={this.handleOpenModal}/>
        </Button>
        <Modal onClose={this.handleCloseModal} open={isOpenModal}>
          <ToDoForm
            values={item}
            onChangeInput={this.handleChangeInput}
            onSave={this.handleSaveItem}/>
        </Modal>
      </Fragment>
    )
  }

  renderGrid() {
    const { items } = this.props
    return (<Grid>
      {
        items.map(item => <GridItem
          key={item.id}
          title={item.title}
          description={item.description}
          handleRemove={this.handleRemoveItem(item.id)}
          handleEdit={this.handleClickEdit(item)} />)
      }
    </Grid>)
  }
}

ToDoComponent.propTypes = {
  handleRemoveItem: PropTypes.func.isRequired,
  handleSaveItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
}

export default ToDoComponent
