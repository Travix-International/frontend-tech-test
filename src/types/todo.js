import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'

const todo = ImmutablePropTypes.contains({
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
})

export default todo
