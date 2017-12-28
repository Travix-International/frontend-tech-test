import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Edit from './Edit';
import Normal from './Normal';
import './style.scss';

export class MyComponent extends Component {
  static propTypes = {
    mode: PropTypes.string.isRequired,
    task: PropTypes.object,
  }

  static defaultProps = {
    task: {
      title: '',
      description: '',
    },
  }

  render() {
    const { mode, task } = this.props;

    return (
      <div className="item">
        {mode === 'EDIT' ? (
          <Edit mode={mode} task={task} />
        ) : (
          <Normal mode={mode} task={task} />
        )}
      </div>
    );
  }
}

export default MyComponent;
