import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import {
  Input,
  Button,
  Checkbox,
} from 'travix-ui-kit';
import action from '../../../actions';
import logger from '../../../logger';
import './style.scss';

export class MyComponent extends Component {
  static propTypes = {
    deleteTask: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired,
    patchTask: PropTypes.func.isRequired,
    postTask: PropTypes.func.isRequired,
    task: PropTypes.object,
  }

  static defaultProps = {
    task: {
      title: '',
      description: '',
    },
  }

  constructor(props) {
    super(props);
    this.state = {
      placeholderTitle: 'title:',
      placeholderDesc: 'description:',
      valueTitle: props.task.title || '',
      valueDesc: props.task.description || '',
      mode: props.mode,
      isSelected: false,
    };

    this.state.isInvalid = !this.validate();

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onClickSwitch = this.onClickSwitch.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  validate(value, type) {
    const changingKey = `value${type}`;
    const keys = ['valueTitle', 'valueDesc'];
    let isValid;
    logger.debug('validate this.state', this.state);
    keys.map((key) => {
      let targetValue;
      if (key === changingKey) {
        targetValue = value;
      } else {
        targetValue = this.state[key];
      }
      isValid = targetValue.length > 0;
      logger.debug('validate', `${isValid}`);
      return isValid;
    });
    return isValid;
  }

  onChange(value, type) {
    const changingKey = `value${type}`;
    logger.debug('onChange', `${changingKey}`);
    this.setState({
      [changingKey]: value,
      isInvalid: !this.validate(value, type),
    });
  }

  onChangeTitle(e) {
    const value = e.target.value;
    this.onChange(value, 'Title');
  }

  onChangeDesc(e) {
    const value = e.target.value;
    this.onChange(value, 'Desc');
  }

  onClick() {
    const { postTask, patchTask, task } = this.props;
    const taskId = task.id;
    const { valueTitle, valueDesc } = this.state;
    if (taskId) {
      // edit
      return patchTask({
        id: taskId,
        title: valueTitle,
        description: valueDesc,
      })
        .then(() => {
          return this.setState({
            mode: 'NORMAL',
          });
        });
      // TODO: handle error when failed
    }
    // new add
    return postTask({
      title: valueTitle,
      description: valueDesc,
    })
      .then(() => {
        return this.setState({
          valueTitle: '',
          valueDesc: '',
          isInvalid: true,
        });
      });
    // TODO: handle error when failed
  }

  onClickSwitch() {
    let { mode } = this.state;
    mode = mode === 'EDIT' ? 'NORMAL' : 'EDIT';
    this.setState({
      mode,
    });
  }

  onClickDelete() {
    const { deleteTask, task } = this.props;
    const taskId = task.id;
    return deleteTask({
      id: taskId,
    });
    // TODO: handle error when failed
  }

  onKeyPress(e) {
    const which = e.which;
    if (which === 13) {
      this.onClick();
    }
  }

  onMouseEnter() {
    this.setState({
      isSelected: true,
    });
  }

  onMouseLeave() {
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

  renderEditMode() {
    const { placeholderDesc, valueDesc, placeholderTitle, valueTitle, isInvalid } = this.state;
    return (
      <div className="mode--edit">
        <div className="item__left" />
        <div className="item__middle">
          <Input onChange={this.onChangeTitle} onKeyPress={this.onKeyPress} placeholder={placeholderTitle} value={valueTitle} />
          <Input onChange={this.onChangeDesc} onKeyPress={this.onKeyPress} placeholder={placeholderDesc} value={valueDesc} />
        </div>
        <div className="item__right">
          <Button disabled={isInvalid} onClick={this.onClick} size="s">
            submit
          </Button>
          <Button onClick={this.onClickSwitch} size="s">cancel</Button>
          <Button onClick={this.onClickDelete} size="s">delete</Button>
        </div>
      </div>
    );
  }

  renderNormalMode() {
    const { isSelected } = this.state;
    const { task } = this.props;
    const isDone = task.isDone;
    return (
      <div className="mode--normal" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
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
        {isSelected &&
          <div className="item__right">
            <Button onClick={this.onClickSwitch} size="s">edit</Button>
          </div>
        }
      </div>
    );
  }

  render() {
    const { mode } = this.state;

    return (
      <div className="item">
        {mode === 'EDIT' ? (
          this.renderEditMode()
        ) : (
          this.renderNormalMode()
        )}
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    postTask: (task) => {
      return dispatch(action.postTask(task));
    },
    patchTask: (task) => {
      return dispatch(action.patchTask(task));
    },
    deleteTask: (task) => {
      return dispatch(action.deleteTask(task));
    },
  };
}

export default connect(null, mapDispatchToProps)(MyComponent);
