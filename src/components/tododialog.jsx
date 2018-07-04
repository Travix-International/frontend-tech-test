import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Dialog from 'react-toolbox/lib/dialog';

import styles from './tododialog.css';

class TodoDialog extends PureComponent {
  state = {
    isTodoChanges: false,
    title: '',
    description: ''
  }

  static propTypes = {
    todo: PropTypes.object,
    addTodo: PropTypes.func,
    updateTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
    isActive: PropTypes.bool,
    hideDialog: PropTypes.func
  }

  hideDialog = () => {
    const { hideDialog } = this.props;
    hideDialog();
  }

  onFieldChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  onCancelClick = () => {
    this.setState({ isTodoChanges: false });
  }

  onAddClick = () => {
    const { addTodo, hideDialog } = this.props;
    const { title, description } = this.state;
    addTodo({ title, description });
    hideDialog();
  }

  onUpdateClick = () => {
    const { hideDialog, updateTodo, todo } = this.props;
    const { title, description } = this.state;

    updateTodo({ ...todo, title, description });
    hideDialog();
  }

  onDeleteClick = () => {
    const { hideDialog, deleteTodo, todo } = this.props;
    hideDialog();
    deleteTodo(todo.id);
  }

  onChangeClick = () => {
    const { title, description } = this.props.todo;
    this.setState({
      isTodoChanges: true,
      title,
      description
    });
  }

  getActions = () => {
    const { todo } = this.props;
    const { isTodoChanges } = this.state;
    return (isTodoChanges && [
      { label: 'cancel', onClick: this.onCancelClick },
      { label: 'update todo', onClick: this.onUpdateClick, icon: 'delete' }
    ]) || (todo && [
      { label: 'delete todo', onClick: this.onDeleteClick, icon: 'delete' },
      { label: 'change todo', onClick: this.onChangeClick, icon: 'create' }
    ]) || [
      { label: 'add todo', onClick: this.onAddClick, icon: 'add' }
    ];
  } 

  render() {
    const { isActive, todo } = this.props;
    const { title, description, isTodoChanges } = this.state;
    const { onFieldChange, hideDialog, getActions } = this;


    return (
      <Dialog
        active={ isActive }
        actions={ getActions() }
        onEscKeyDown={ hideDialog }
        onOverlayClick={ hideDialog }
      >
        <div className='body'>
          {
            ((isTodoChanges || !todo) && (
              <Fragment>
                <input
                  styleName='input'
                  type='text'
                  name='title'
                  placeholder='Todo title'
                  onChange={ onFieldChange }
                  defaultValue={ title }
                />
                <textarea
                  styleName='textarea'
                  name='description'
                  placeholder='todo description'
                  onChange={ onFieldChange }
                  defaultValue={ description }
                ></textarea>
              </Fragment>
            )) || (
              <Fragment>
                <div styleName='title'>{ todo.title }</div>
                <div styleName='description'>{ todo.description }</div>
              </Fragment>
            )
          }
        </div>
      </Dialog>
    );
  }
}

export default CSSModules(TodoDialog, styles);