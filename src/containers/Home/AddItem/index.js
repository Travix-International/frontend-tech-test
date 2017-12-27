import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Input,
  Button,
} from 'travix-ui-kit';
import action from '../../../actions';
import logger from '../../../logger';

export class MyComponent extends Component {
  static propTypes = {
    postTask: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'Your New Item:',
      value: '',
      isInvalid: true,
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onChange(e) {
    const value = e.target.value;
    const isInvalid = value.length === 0;
    logger.debug('additem', `${value} ${isInvalid}`);
    this.setState({
      value,
      isInvalid,
    });
  }

  onClick() {
    const { postTask } = this.props;
    const { value } = this.state;
    return postTask({
      title: value,
      description: 'temp desc',
    })
      .then(() => {
        return this.setState({
          value: '',
          isInvalid: true,
        });
      });
  }

  onKeyPress(e) {
    const which = e.which;
    if (which === 13) {
      this.onClick();
    }
  }

  render() {
    const { placeholder, value, isInvalid } = this.state;

    return (
      <div className="additem">
        <Input onChange={this.onChange} onKeyPress={this.onKeyPress} placeholder={placeholder} value={value} />
        <Button disabled={isInvalid} onClick={this.onClick}>
          submit
        </Button>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    postTask: (task) => {
      return dispatch(action.postTask(task));
    },
  };
}

export default connect(null, mapDispatchToProps)(MyComponent);
