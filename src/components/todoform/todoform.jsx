import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { List, ListItem } from 'react-toolbox/lib/list';

import Input from '../shared/input/input.jsx';
import DelayedInput from '../shared/delayedinput/delayedinput.jsx';
import Textarea from '../shared/textarea/textarea.jsx';

import styles from './todoform.css';

class TodoForm extends PureComponent {
  static propTypes = {
    changeDialogField: PropTypes.func,
    changeDialogListField: PropTypes.func,
    todo: PropTypes.object,
    isTodoChanges: PropTypes.bool
  }

  onFieldChange = (value, name) => {
    const { changeDialogField } = this.props;

    changeDialogField({ [name]: value });
  }

  onListFieldChange = (value, name) => {
    if (!value) return;
    const { changeDialogListField } = this.props;

    changeDialogListField({ value, name });
  }

  render() {
    const { onFieldChange, onListFieldChange } = this;
    const { todo } = this.props;

    return (
      <Fragment>
        <Input
          name='title'
          placeholder='Todo title'
          onChange={ onFieldChange }
          value={ todo.title }
        />
        <Textarea
          name='description'
          placeholder='todo description'
          onChange={ onFieldChange }
          value={ todo.description }
        />
        <DelayedInput
          icon='add'
          label='add subtask'
          name='subtasks'
          onChange={ onListFieldChange }
          placeholder='New subtask'
        />
        <List>
          {
            todo.subtasks.map(subtask => (
              <ListItem caption={ subtask.name } key={ subtask.name } />
            ))
          }
        </List>
        <DelayedInput
          icon='add'
          label='add tag'
          name='tags'
          onChange={ onListFieldChange }
          placeholder='New tag'
        />
        <div styleName='tags'>
          {
            todo.tags.map(tag => (
              <span
                styleName='tag'
                key={ tag }
              >{ tag }</span>
            ))
          }
        </div>
      </Fragment>
    );
  }
}

export default CSSModules(TodoForm, styles);