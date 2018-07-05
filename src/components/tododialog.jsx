import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Dialog from 'react-toolbox/lib/dialog';
import { ListCheckbox } from 'react-toolbox/lib/list';

import TodoForm from './todoform.jsx';
import styles from './tododialog.css';

class TodoDialog extends PureComponent {
  static propTypes = {
    todo: PropTypes.object,
    addTodo: PropTypes.func,
    updateTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
    dialog: PropTypes.object,
    hideDialog: PropTypes.func,
    changeDialogField: PropTypes.func,
    changeDialogView: PropTypes.func
  }

  onCancelClick = () => {
    const { changeDialogView } = this.props;
    changeDialogView(false);
  }

  onAddClick = () => {
    const {
      addTodo,
      hideDialog,
      dialog
    } = this.props;

    addTodo(dialog.form);
    hideDialog();
  }

  onUpdateClick = () => {
    const {
      hideDialog,
      updateTodo,
      todo,
      dialog
    } = this.props;

    updateTodo({ ...todo, ...dialog.form });
    hideDialog();
  }

  onDeleteClick = () => {
    const {
      hideDialog,
      deleteTodo,
      todo
    } = this.props;

    hideDialog();
    deleteTodo(todo.id);
  }

  onChangeClick = () => {
    const {
      todo,
      changeDialogField,
      changeDialogView
    } = this.props;
    const {
      title,
      description,
      subtasks,
      tags
    } = todo;

    changeDialogView(true);
    changeDialogField({
      title,
      description,
      subtasks,
      tags
    });
  }

  getActions = () => {
    const { todo, dialog } = this.props;
    return (!todo && [
      { label: 'add todo', onClick: this.onAddClick, icon: 'add', primary: true }
    ]) || (dialog.isTodoChanges && [
      { label: 'cancel', onClick: this.onCancelClick, primary: true },
      { label: 'update todo', onClick: this.onUpdateClick, icon: 'delete', primary: true }
    ]) || [
      { label: 'delete todo', onClick: this.onDeleteClick, icon: 'delete', primary: true },
      { label: 'change todo', onClick: this.onChangeClick, icon: 'create', primary: true }
    ];
  }

  checkSubtask = (subtaskName) => {
    const { todo, updateTodo } = this.props;
    const subtaskIndex = todo.subtasks.findIndex(subtask => subtask.name === subtaskName);

    if (!(subtaskIndex + 1)) return;

    const subtask = todo.subtasks[subtaskIndex];
    const updatedSubtasks = [ ...todo.subtasks ];
    updatedSubtasks.splice(subtaskIndex, 1, { ...subtask, isDone: !subtask.isDone }) ;

    updateTodo({
      ...todo,
      subtasks: updatedSubtasks
    });
  }

  render() {
    const {
      dialog,
      todo,
      hideDialog,
      changeDialogField
    } = this.props;
    const { getActions, checkSubtask } = this;

    return (
      <Dialog
        active={ dialog.isOpened }
        actions={ getActions() }
        onEscKeyDown={ hideDialog }
        onOverlayClick={ hideDialog }
      >
        <div styleName='body'>
          {
            ((dialog.isTodoChanges || !todo) && (
              <TodoForm
                changeDialogField={ changeDialogField }
                todo={ dialog.form }
                isTodoChanges={ dialog.isTodoChanges }
              />
            )) || (
              <Fragment>
                <div styleName='title'>{ todo.title }</div>
                <div styleName='description'>{ todo.description }</div>
                <div>
                  {
                    todo.tags.map(tag => (
                      <span key={ tag } >{ tag }</span>
                    ))
                  }
                </div>
                <div>
                  {
                    todo.subtasks.map(subtask => (
                      <ListCheckbox
                        checked={ subtask.isDone }
                        caption={ subtask.name }
                        key={ subtask.name }
                        onChange={ checkSubtask.bind(this, subtask.name) }
                      />
                    ))
                  }
                </div>
              </Fragment>
            )
          }
        </div>
      </Dialog>
    );
  }
}

export default CSSModules(TodoDialog, styles);