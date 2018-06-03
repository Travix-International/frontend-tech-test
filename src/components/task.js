import React, { Component} from 'react';
import PropTypes from 'prop-types';

export class Task extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {

    return (
      <li
        style={ {textDecoration: 'none'}
        }
      >
        {this.props.text}
        {this.props.description}
      </li>
    )

  }

}
Task.propTypes = {
  text: PropTypes.string.isRequired,
  description: PropTypes.string,
}
