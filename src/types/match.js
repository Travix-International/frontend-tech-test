import PropTypes from 'prop-types'

const match = PropTypes.shape({
  isExact: PropTypes.bool,
  params: PropTypes.object,
  path: PropTypes.string,
  url: PropTypes.string,
})

export default match
