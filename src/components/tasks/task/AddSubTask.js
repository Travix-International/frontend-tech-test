import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextArea from 'components/shared/textArea'
import { Button } from 'reactstrap'
import { createSubTask } from 'actions'
import { MAX_SUB_TASK_NAME_LENGTH } from 'constants'
import styles from './task.scss'

class AddSubTask extends Component {
  constructor(props) {
    super(props)

    this.state = {
      subTaskTextAreaValue: ''
    }
  }

  setSubTaskTextAreaValue = (value) => {
    this.setState({ subTaskTextAreaValue: value })
  }

  render() {
    const { subTaskTextAreaValue } = this.state
    const { id, createSubTaskAction } = this.props

    return (
      <div>
        <TextArea
          className={styles['task-container__content__textarea']}
          maxLength={MAX_SUB_TASK_NAME_LENGTH}
          onChange={this.setSubTaskTextAreaValue}
          value={subTaskTextAreaValue}
        />
        <Button
          color="primary"
          className={styles['add-btn']}
          disabled={!subTaskTextAreaValue}
          onClick={() => {
            createSubTaskAction({ id, name: subTaskTextAreaValue, description: '' })
            this.setSubTaskTextAreaValue('')
          }}
        >
          Add
        </Button>
      </div>
    )
  }
}

AddSubTask.propTypes = {
  id: PropTypes.number.isRequired,
  createSubTaskAction: PropTypes.func.isRequired
}

export default connect(null, {
  createSubTaskAction: createSubTask
})(AddSubTask)
