import React from 'react'
import { connect } from 'react-redux'

import './Notifications.css'

const loader = () => (
  <div className="loader">
    <div className="ball-one"></div>
    <div className="ball-two"></div>
    <div className="ball-three"></div>
  </div>
)

const Notifications = (props) => (
  <div>
    {props.isFetching && <div className="loading">{loader()} Syncronyzing...</div>}
  </div>
)

const mapStateToProps = state => (
  { isFetching: state.isFetching }
)

export default connect(mapStateToProps, null)(Notifications)
