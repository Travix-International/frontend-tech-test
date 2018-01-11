import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  makeSelectTitle,
  makeSelectDescription,
} from '../../selectors/home'


function Home(props) {
  const {
    title,
    description,
  } = props

  return (
    <div>
      <h2>
        {title}
      </h2>
      <p>
        {description}
      </p>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  title: makeSelectTitle(),
  description: makeSelectDescription(),
})

Home.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
}

export default connect(mapStateToProps, null)(Home)
