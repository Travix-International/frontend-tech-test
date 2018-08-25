import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { Button, Input } from '..'
import styles from './ListItem.scss'

class ListItem extends Component {
  state = {
    editable: false,
    editTitle: '',
    editDesc: '',
  }

  componentDidMount = () => {
    const { title, desc } = this.props
    this.setState({
      editTitle: title,
      editDesc: desc,
    })
  }

  onEditButtonClickHandler = () => {
    const { editable } = this.state
    this.setState({
      editable: !editable,
    })
  }

  onSaveButtonClickHandler = () => {
    const { saveTask, selectedTask } = this.props
    const { editTitle, editDesc } = this.state
    saveTask(selectedTask, editTitle, editDesc)
  }

  onDeleteButtonClickHandler = () => {
    const { deleteTask, selectedTask } = this.props
    deleteTask(selectedTask)
  }

  onChangeValueHandler = event => {
    this.setState({ editTitle: event.target.value })
  }

  onChangeDescHandler = event => {
    this.setState({ editDesc: event.target.value })
  }

  render() {
    const { selected, onClick, title, desc, length } = this.props
    const { editable, editTitle, editDesc } = this.state
    let taskArea = (
      <Fragment>
        <p className={styles.Text}>{title}</p>
        <p className={styles.Desc}>{desc}</p>
      </Fragment>
    )

    const hr = length > 1 ? <hr className={styles.HR} /> : null

    if (editable && selected) {
      taskArea = (
        <Fragment>
          <Input
            onChangeValueHandler={this.onChangeValueHandler}
            value={editTitle}
            title
          />
          <Input
            onChangeDescHandler={this.onChangeDescHandler}
            value={editDesc}
          />
        </Fragment>
      )
    }
    return (
      <Fragment>
        {/* eslint-disable */}
        <div
          className={selected ? styles.Item_Selected : styles.Item}
          onClick={onClick}
          data-testid="listItem"
          role="group"
        >
          {/* eslint-enable */}
          {taskArea}
        </div>
        <div className={styles.Buttons}>
          <Button
            text="delete"
            delete
            onButtonClick={this.onDeleteButtonClickHandler}
            disabled={!selected}
          />
          <Button
            text={`${!editable ? 'edit' : 'save'}`}
            edit
            onButtonClick={
              !editable
                ? this.onEditButtonClickHandler
                : this.onSaveButtonClickHandler
            }
            disabled={!selected}
          />
        </div>
        {hr}
      </Fragment>
    )
  }
}

ListItem.defaultProps = {
  selected: false,
  selectedTask: null,
  title: '',
  desc: '',
  length: 0,
  onClick: null,
  deleteTask: null,
  saveTask: null,
}

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  onClick: PropTypes.func,
  deleteTask: PropTypes.func,
  saveTask: PropTypes.func,
  selected: PropTypes.bool,
  selectedTask: PropTypes.number,
  length: PropTypes.number,
}

export default ListItem
