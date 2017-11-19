import React from 'react'
import { connect } from 'react-redux'

const Notifications = (props) => (
  <div>
    {props.isFetching && <div className="loading">Syncronyzing...</div>}
  </div>
)

const mapStateToProps = state => (
  { isFetching: state.isFetching }
)

export default connect(mapStateToProps, null)(Notifications)
