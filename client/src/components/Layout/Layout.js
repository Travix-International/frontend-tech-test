import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Header } from '..'
import FooterContainer from '../../containers/FooterContainer/FooterContainer'
import ListContainer from '../../containers/ListContainer/ListContainer'
import styles from './Layout.scss'

class Layout extends Component {
  state = {
    counter: 0,
    tasks: [],
  }

  componentDidMount = () => {
    const { fetchTasks } = this.props
    fetchTasks()
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.tasks) {
      return { counter: nextProps.tasks.length, tasks: nextProps.tasks }
    }
    return null
  }

  render() {
    const { counter, tasks } = this.state
    const { loading } = this.props
    return (
      <div className={styles.Layout}>
        <Header counter={counter} />
        <ListContainer tasks={tasks} loading={loading} />
        <FooterContainer />
      </div>
    )
  }
}

Layout.defaultProps = {
  loading: false,
}

Layout.propTypes = {
  fetchTasks: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

export default Layout
