import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'
import { observe, streamProps } from 'frint-react'

import { getTasks } from 'application/reducers/task/getTasksReducer'

import './Todos.less'

const bem = bemClassName.bind(null, 'todos')

class Todos extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    getTasks: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.getTasks()
  }

  render() {
    console.log(this.props.tasks)
    return (
      <div className={bem('container')}>
        <h1 className={bem('title')}>TODOS</h1>
      </div>
    );
  }
}

export default observe(app => (
  streamProps({})
    .set( app.get('store').getState$(), state => ({ tasks: state.task.tasks }) )
    .setDispatch({ getTasks }, app.get('store'))
    .get$()
))(Todos)
