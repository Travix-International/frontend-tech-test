import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Header} from '../'
import FooterContainer from '../../containers/FooterContainer/FooterContainer'
import ListContainer from '../../containers/ListContainer/ListContainer'
import styles from './Layout.scss'

class Layout extends Component {
  state = {
    counter: 0,
    tasks: []
  }

  componentDidMount = () => {
    this.props.fetchTasks()
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.tasks) {
      return {counter: nextProps.tasks.length, tasks: nextProps.tasks}
    } else return null
  }

  render() {
    const {counter, tasks} = this.state
    const {loading} = this.props
    return (
      <div className={styles.Layout}>
        <Header counter={counter} />
        <ListContainer tasks={tasks} loading={loading} />
        <FooterContainer />
      </div>
    )
  }
}

Layout.propTypes = {
  fetchTasks: PropTypes.func,
  tasks: PropTypes.array,
  loading: PropTypes.bool
}

export default Layout
