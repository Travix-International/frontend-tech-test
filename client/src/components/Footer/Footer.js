import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Button, Input} from '../UI'
import styles from './Footer.scss'

class Footer extends Component {
  state = {
    taskTitle: '',
    taskDesc: ''
  }

  onChangeValueHandler = event => {
    this.setState({taskTitle: event.target.value})
  }

  onChangeDescHandler = event => {
    this.setState({taskDesc: event.target.value})
  }

  onAddButtonClickHandler = () => {
    const task = {
      title: this.state.taskTitle,
      desc: this.state.taskDesc
    }
    this.props.addTask(task)
    this.setState({
      taskTitle: '',
      taskDesc: ''
    })
  }

  render() {
    const {taskTitle, taskDesc} = this.state
    return (
      <div className={styles.Footer}>
        <div className={styles.Inputs}>
          <Input
            onChangeValueHandler={this.onChangeValueHandler}
            value={taskTitle}
            title
          />
          <Input
            onChangeDescHandler={this.onChangeDescHandler}
            value={taskDesc}
          />
        </div>
        <div className={styles.Buttons}>
          <Button
            text="add"
            add
            onButtonClick={this.onAddButtonClickHandler}
            disabled={taskTitle === '' || taskDesc === ''}
          />
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
  addTask: PropTypes.func,
  selectedTask: PropTypes.number
}

export default Footer
