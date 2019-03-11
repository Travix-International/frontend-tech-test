import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ToDoComponent from './todo'
import Loading from '../../components/loading'
import Main from '../../components/main'
import Error from '../../components/error'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getItems } from '../../modules/todo/actions/getItems'
import { insertOrUpdateItem } from '../../modules/todo/actions/insertOrUpdateItem'
import { deleteItem } from '../../modules/todo/actions/deleteItem'

export class ToDoContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getItems()
  }

  handleSaveItem = (item) => {
    const { insertOrUpdateItem } = this.props
    insertOrUpdateItem(item)
  }

  handleRemoveItem = (id) => {
    const { deleteItem } = this.props
    deleteItem(id)
  }

  render() {
    const { items: { data, loading, error } } = this.props
    return (
      <Main>
        <Loading isOpen={loading} />
        <Error isOpen={!!error} message={error} />
        <ToDoComponent
          handleRemoveItem={this.handleRemoveItem}
          handleSaveItem={this.handleSaveItem}
          items={data}
        />
      </Main>
    )
  }
}

ToDoContainer.propTypes = {
  getItems: PropTypes.func.isRequired,
  insertOrUpdateItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired
}

export const mapStateToProps = ({items}) => ({items})

export const mapDispatchToProps = dispatch => bindActionCreators({
  getItems,
  insertOrUpdateItem,
  deleteItem
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoContainer)
