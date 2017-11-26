import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import './Task.less'

const bem = bemClassName.bind(null, 'task')

class Task extends Component {
  static propTypes = {
    task: PropTypes.object.isRequired
  }

  render() {
    const { task: { title, description } } = this.props
    return (
      <li className={bem('item')}>
        <div className={bem('title')}>{title}</div>
        <div className={bem('description')}>{description}</div>
      </li>
    );
  }
}

export default Task
