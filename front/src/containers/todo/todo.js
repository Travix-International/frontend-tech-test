import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Loading from '../../components/loading'
import Container from '../../components/container'
import Card from '../../components/card'
import Grid from '../../components/grid'
import GridItem from '../../components/grid-item'
import Empty from '../../components/empty'
import Error from '../../components/error'
import CircleButton from '../../components/circle-button'
import Modal from '../../components/modal'
import ModalTodo from './components/modal'

const Button = styled.div`
  position: absolute;
  bottom: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
`
const Title = styled.h1`
  padding-top: 1.5rem;
  font-size: 2rem;
  color: #707070;
  text-align: center;
  font-weight: 600;
`

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

    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleClickEdit = this.handleClickEdit.bind(this)
    this.cleanValuesItem = this.cleanValuesItem.bind(this)
    this.handleChangeInput = this.handleChangeInput.bind(this)
    this.handleSaveItem = this.handleSaveItem.bind(this)
    this.handleRemoveItem = this.handleRemoveItem.bind(this)
  }

  componentDidMount() {
    this.props.getItems()
  }

  cleanValuesItem() {
    this.setState({ item: { title: '', description: '', id: 0 } })
  }

  handleCloseModal() {
    this.setState({ isOpenModal: false})
    this.cleanValuesItem()
  }

  handleOpenModal() {
    this.setState({ isOpenModal: true})
  }

  handleClickEdit(id) {
    const {items: { data } } = this.props
    return () => {
      this.setState({ item: data.filter(item => item.id === id)[0]})
      this.handleOpenModal()
    }
  }

  handleChangeInput(prop) {
    return (e) => {
      this.setState({
        item: {
          ...this.state.item,
          [prop]: e.target.value
        }
      })
    }
  }

  async handleSaveItem() {
    const { item } = this.state
    const { insertOrUpdateItem } = this.props
    await insertOrUpdateItem(item)

    this.handleCloseModal()
  }

  handleRemoveItem(id) {
    const { deleteItem } = this.props
    console.log(id)
    return () => {
      console.log(id)
      deleteItem(id)
    }
  }


  render() {
    const { item, isOpenModal } = this.state
    const { items: { loading, data, error } } = this.props
    console.log(item, loading, data)
    return (
      <Container>
        <Loading isOpen={loading} />
        <Error isOpen={!!error} message={error} />
        <Card>
          <Title>ToDo</Title>
          {this.renderGrid()}
          {this.renderEmpty()}
        </Card>
        <Button>
          <CircleButton onClick={this.handleOpenModal}/>
        </Button>
        <Modal onClose={() => this.handleCloseModal()} open={isOpenModal}>
          <ModalTodo
            values={item}
            onChangeInput={this.handleChangeInput}
            onSave={this.handleSaveItem}/>
        </Modal>
      </Container>
    )
  }
  renderGrid() {
    const { items: { data } } = this.props
    if(!data.length) return null
    return (<Grid>
      {
        data.map(item => <GridItem
          key={item.id}
          title={item.title}
          description={item.description}
          done={false}
          handleRemove={this.handleRemoveItem(item.id)}
          handleEdit={this.handleClickEdit(item.id)} />)
      }
    </Grid>)
  }
  renderEmpty(){
    const { items: { data } } = this.props
    if(!data.length) return <Empty />
    return null
  }
}

ToDoComponent.propTypes = {
  getItems: PropTypes.func.isRequired,
  insertOrUpdateItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired
}

export default ToDoComponent
