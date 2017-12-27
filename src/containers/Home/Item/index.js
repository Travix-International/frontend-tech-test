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

  render() {
    const { mode, placeholderDesc, valueDesc, placeholderTitle, valueTitle, isInvalid } = this.state;

    return (
      <div className="additem">
        {mode === 'EDIT' ? (
          <div className="mode--edit">
            <Input onChange={this.onChangeTitle} onKeyPress={this.onKeyPress} placeholder={placeholderTitle} value={valueTitle} />
            <Input onChange={this.onChangeDesc} onKeyPress={this.onKeyPress} placeholder={placeholderDesc} value={valueDesc} />
            <Button disabled={isInvalid} onClick={this.onClick}>
              submit
            </Button>
            <Button onClick={this.onClickSwitch}>switch</Button>
            <Button onClick={this.onClickDelete}>delete</Button>
          </div>
        ) : (
          <div className="mode--normal">
            title: {valueTitle} <br />
            desc: {valueDesc}
            <Button onClick={this.onClickSwitch}>switch</Button>
          </div>
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
