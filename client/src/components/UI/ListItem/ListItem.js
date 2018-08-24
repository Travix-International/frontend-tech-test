import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

import {Button, Input} from '../'
import styles from './ListItem.scss'

class ListItem extends Component {
  state = {
    editable: false,
    editTitle: '',
    editDesc: ''
  }

  componentDidMount = () => {
    this.setState({
      editTitle: this.props.title,
      editDesc: this.props.desc
    })
  }

  onEditButtonClickHandler = () => {
    this.setState({
      editable: !this.state.editable
    })
  }

  onSaveButtonClickHandler = () => {
    this.props.saveTask(
      this.props.selectedTask,
      this.state.editTitle,
      this.state.editDesc
    )
  }

  onDeleteButtonClickHandler = () => {
    this.props.deleteTask(this.props.selectedTask)
  }

  onChangeValueHandler = event => {
    this.setState({editTitle: event.target.value})
  }

  onChangeDescHandler = event => {
    this.setState({editDesc: event.target.value})
  }

  render() {
    const {selected, onClick, title, desc} = this.props
    const {editable, editTitle, editDesc} = this.state
    let taskArea = (
      <Fragment>
        <p className={styles.Text}>{title}</p>
        <p className={styles.Desc}>{desc}</p>
      </Fragment>
    )

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
        <div
          className={selected ? styles.Item_Selected : styles.Item}
          onClick={onClick}
        >
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
      </Fragment>
    )
  }
}

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  onClick: PropTypes.func,
  deleteTask: PropTypes.func,
  saveTask: PropTypes.func,
  selected: PropTypes.bool,
  selectedTask: PropTypes.number
}

export default ListItem
