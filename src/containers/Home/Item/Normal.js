import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import {
  Button,
  Checkbox,
} from 'travix-ui-kit';
import action from '../../../actions';
import logger from '../../../logger';
import './normal.scss';

export class MyComponent extends Component {
  static propTypes = {
    mode: PropTypes.string.isRequired,
    patchTask: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired,
    taskSwitchEditMode: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };

    this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
    this.onClickSwitch = this.onClickSwitch.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onClickSwitch() {
    const { mode, taskSwitchEditMode, task } = this.props;
    const targetMode = mode === 'EDIT' ? 'NORMAL' : 'EDIT';
    taskSwitchEditMode(task.id, targetMode);
  }

  onMouseMove() {
    this.setState({
      isSelected: true,
    });
  }

  onMouseLeave() {
    logger.debug('on mouseleave');
    this.setState({
      isSelected: false,
    });
  }

  onChangeCheckbox() {
    const { patchTask, task } = this.props;
    patchTask({
      id: task.id,
      isDone: !task.isDone,
    });
  }

  render() {
    const { isSelected } = this.state;
    const { task } = this.props;
    const isDone = task.isDone;
    return (
      <div
        className={classNames('mode--normal', {
          'is-done': isDone,
        })}
        onMouseLeave={this.onMouseLeave}
        onMouseMove={this.onMouseMove}
      >
        <div className="item__left" onClick={this.onChangeCheckbox}>
          <Checkbox checked={isDone} name={`item-sheckbox-${task.id}`} />
        </div>
        <div className="item__middle">
          <div
            className={classNames('item__title', {
              'is-done': isDone,
            })}
          >
            {task.title}
          </div>
          <div
            className={classNames('item__desc', {
              'is-done': isDone,
            })}
          >
            {task.description}
          </div>
        </div>
        <div
          className={classNames('item__right', {
            'is-selected': isSelected,
          })}
        >
          <Button onClick={this.onClickSwitch} size="s">edit</Button>
        </div>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    patchTask: (task) => {
      return dispatch(action.patchTask(task));
    },
    taskSwitchEditMode: (id, targetMode) => {
      return dispatch(action.taskSwitchEditMode(id, targetMode));
    },
  };
}

export default connect(null, mapDispatchToProps)(MyComponent);
