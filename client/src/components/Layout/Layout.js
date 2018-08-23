import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {List, Header, Footer} from '../'
import styles from './Layout.scss'

class Layout extends Component {
  state = {
    counter: 0
  }

  componentDidMount = () => {
    this.props.fetchTasks()
  }

  render() {
    const {counter} = this.state
    return (
      <div className={styles.Layout}>
        <Header counter={counter} />
        <List />
        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  fetchTasks: PropTypes.func
}

export default Layout
