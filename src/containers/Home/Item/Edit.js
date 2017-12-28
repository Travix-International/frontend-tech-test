import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Input,
  Button,
} from 'travix-ui-kit';
import action from '../../../actions';
import logger from '../../../logger';
import './edit.scss';

export class MyComponent extends Component {
  static propTypes = {
    deleteTask: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired,
    patchTask: PropTypes.func.isRequired,
    postTask: PropTypes.func.isRequired,
    task: PropTypes.object,
    taskSwitchEditMode: PropTypes.func.isRequired,
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
    };

    this.state.isInvalid = !this.validate();

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onClickSwitch = this.onClickSwitch.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
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
    const { postTask, patchTask, task, taskSwitchEditMode } = this.props;
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
          return taskSwitchEditMode(task.id, 'NORMAL');
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
    const { mode, taskSwitchEditMode, task } = this.props;
    const targetMode = mode === 'EDIT' ? 'NORMAL' : 'EDIT';
    logger.debug('item edit', task);
    taskSwitchEditMode(task.id, targetMode);
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

  render() {
    const { placeholderDesc, valueDesc, placeholderTitle, valueTitle, isInvalid } = this.state;
    return (
      <div className="mode--edit">
        <div className="item__left">
          <Button mods={['error']} onClick={this.onClickDelete} size="s">x</Button>
        </div>
        <div className="item__middle">
          <Input mods={['title']} onChange={this.onChangeTitle} onKeyPress={this.onKeyPress} placeholder={placeholderTitle} value={valueTitle} />
          <Input mods={['desc']} onChange={this.onChangeDesc} onKeyPress={this.onKeyPress} placeholder={placeholderDesc} value={valueDesc} />
        </div>
        <div className="item__right">
          <Button disabled={isInvalid} mods={['submit']} onClick={this.onClick} size="s">
            submit
          </Button>
          <Button onClick={this.onClickSwitch} size="s" variation="ghost-inverted">cancel</Button>
        </div>
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
    taskSwitchEditMode: (id, targetMode) => {
      return dispatch(action.taskSwitchEditMode(id, targetMode));
    },
  };
}

export default connect(null, mapDispatchToProps)(MyComponent);
