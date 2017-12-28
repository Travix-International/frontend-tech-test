import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import action from '../../actions';
import logger from '../../logger';

// This function takes a component...
export default function withEditTask(WrappedComponent, task = {}, mode) {
  // ...and returns another component...
  class MyComponent extends Component {
    static propTypes = {
      deleteTask: PropTypes.func.isRequired,
      patchTask: PropTypes.func.isRequired,
      postTask: PropTypes.func.isRequired,
      taskSwitchEditMode: PropTypes.func.isRequired,
    }

    constructor(props) {
      super(props);
      this.state = {
        placeholderTitle: 'title:',
        placeholderDesc: 'description:',
        valueTitle: task.title || '',
        valueDesc: task.description || '',
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
      const { postTask, patchTask, taskSwitchEditMode } = this.props;
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
      const { taskSwitchEditMode } = this.props;
      const targetMode = mode === 'EDIT' ? 'NORMAL' : 'EDIT';
      logger.debug('item edit', task);
      taskSwitchEditMode(task.id, targetMode);
    }

    onClickDelete() {
      const { deleteTask } = this.props;
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
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      const { valueDesc, valueTitle, isInvalid } = this.state;
      return (
        <WrappedComponent
          isInvalid={isInvalid}
          mode={mode}
          onChangeDesc={this.onChangeDesc}
          onChangeTitle={this.onChangeTitle}
          onClick={this.onClick}
          onClickDelete={this.onClickDelete}
          onClickSwitch={this.onClickSwitch}
          onKeyPress={this.onKeyPress}
          task={task}
          valueDesc={valueDesc}
          valueTitle={valueTitle}
          {...this.props}
        />
      );
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      postTask: (t) => {
        return dispatch(action.postTask(t));
      },
      patchTask: (t) => {
        return dispatch(action.patchTask(t));
      },
      deleteTask: (t) => {
        return dispatch(action.deleteTask(t));
      },
      taskSwitchEditMode: (id, targetMode) => {
        return dispatch(action.taskSwitchEditMode(id, targetMode));
      },
    };
  }

  return connect(null, mapDispatchToProps)(MyComponent);
}
