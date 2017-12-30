import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { get as _get } from 'lodash';
import classNames from 'classnames';
import {
  MessageBox,
} from 'travix-ui-kit';
import logger from '../../../logger';
import action from '../../../actions';

import './style.scss';

const HANDLING_ERRORS = [
  'POST_TASK',
  'PATCH_TASK',
  'DELETE_TASK',
];

export class MyComponent extends Component {
  static propTypes = {
    errorHandled: PropTypes.func.isRequired,
    errs: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      isShown: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const errId = e.target.getAttribute('data-err-id');
    const { errorHandled } = this.props;
    errorHandled(errId);
    this.setState({
      isShown: false,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { errs } = this.props;
    logger.debug('error:index', errs);

    // show err if there is
    if (errs.length !== nextProps.errs.length) {
      if (nextProps.errs.length > 0) {
        this.setState({
          isShown: true,
        });
      } else {
        this.setState({
          isShown: false,
        });
      }
    }
  }

  render() {
    const { isShown } = this.state;
    const { errs } = this.props;

    return (
      <div
        className={classNames('home--error', {
          'is-shown': isShown,
        })}
      >
        {errs.map((err) => {
          return (
            <div className="item--error">
              <MessageBox type="error">
                <p>Something went wrong</p>
                <p>{JSON.stringify(err)}</p>
              </MessageBox>
              <div className="button--close" data-err-id={err.id} onClick={this.onClick}>x</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export function mapStateToProps(state) {
  const errors = _get(state, 'global.errors', []);
  const errs = [];
  errors.map((err) => {
    if (err.fromAction && HANDLING_ERRORS.indexOf(err.fromAction) > -1) {
      return errs.push(err);
    }
    return false;
  });

  return {
    errs,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    errorHandled: (errId) => {
      return dispatch(action.errorHandled(errId));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
