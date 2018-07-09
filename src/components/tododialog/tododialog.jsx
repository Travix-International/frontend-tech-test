import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Dialog from 'react-toolbox/lib/dialog';

import TodoForm from '../todoform/todoform.jsx';
import DialogData from '../dialogdata/dialogdata.jsx';
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
    changeDialogListField: PropTypes.func,
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

  render() {
    const {
      dialog,
      todo,
      hideDialog,
      changeDialogField,
      changeDialogListField,
      updateTodo
    } = this.props;
    const { getActions } = this;

    return (
      <Dialog
        styleName='dialog'
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
                changeDialogListField={ changeDialogListField }
                todo={ dialog.form }
                isTodoChanges={ dialog.isTodoChanges }
              />
            )) || (
              <DialogData
                todo={ todo }
                updateTodo={ updateTodo }
              />
            )
          }
        </div>
      </Dialog>
    );
  }
}

export default CSSModules(TodoDialog, styles);