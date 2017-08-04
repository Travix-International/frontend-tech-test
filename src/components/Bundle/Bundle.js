import React from 'react'
import PropTypes from 'prop-types'

export default class Bundle extends React.Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    loading: PropTypes.oneOf([PropTypes.string, PropTypes.element]),  // eslint-disable-line
    children: PropTypes.any, // eslint-disable-line
  }

  state = {
    // short for "module" but that's a keyword in js, so "mod"
    mod: null,
  }

  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load(props) {
    this.setState({
      mod: null,
    })
    props.load((mod) => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod,
      })
    })
  }

  render() {
    const { mod: Comp } = this.state

    if (Comp) {
      return (
        <Comp />
      )
    }

    return this.props.loading || (<h5>Loading</h5>)
  }
}
