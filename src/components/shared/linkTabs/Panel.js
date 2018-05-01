import PropTypes from 'prop-types'
import { PureComponent } from 'react'

class Panel extends PureComponent {
  render() {
    return null
  }
}

Panel.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  pathCategory: PropTypes.string.isRequired,
  cutAfter: PropTypes.bool,
  saveQuery: PropTypes.bool,
  queryProperties: PropTypes.array,
  pathCategoryIndex: PropTypes.number.isRequired
}

Panel.defaultProps = {
  saveQuery: false,
  cutAfter: false
}

export default Panel
