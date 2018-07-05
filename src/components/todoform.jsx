import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Button from 'react-toolbox/lib/button';
import { List, ListItem } from 'react-toolbox/lib/list';

import styles from './todoform.css';

class TodoForm extends PureComponent {
  state = {
    subtaskAdding: false,
    tagAdding: false,
    subtask: null,
    tag: null
  }

  static propTypes = {
    changeDialogField: PropTypes.func,
    todo: PropTypes.object,
    isTodoChanges: PropTypes.bool
  }

  subtaskInput = React.createRef();
  tagInput = React.createRef();

  onFieldChange = (e) => {
    const { name, value } = e.target;
    const { changeDialogField } = this.props;

    changeDialogField({ [name]: value });
  }

  newEntry = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  addSubtask = (e) => {
    const { subtask, subtaskAdding } = this.state;
    const { todo, changeDialogField } = this.props;
    const subtaskInput = this.subtaskInput.current;
    
    if (!subtaskAdding) this.setState({ subtaskAdding: true });
    if (subtask) {
      if (e.type === 'keypress' && e.which !== 13) return;
      const isAlreadyCreated = todo.subtasks.find(arrayTask => arrayTask.name === subtask);
      if (isAlreadyCreated + 1) return;
      changeDialogField({ subtasks: [ ...todo.subtasks, { name: subtask, isDone: false } ] });
      subtaskInput.value = '';
    }
  }

  addTag = (e) => {
    const { tag, tagAdding } = this.state;
    const { todo, changeDialogField } = this.props;
    const tagInput = this.tagInput.current;

    if (!tagAdding) this.setState({ tagAdding: true });
    if (tag) {
      if (e.type === 'keypress' && e.which !== 13) return;
      const isAlreadyCreated = todo.tags.find(arrayTag => arrayTag === tag);
      if (isAlreadyCreated + 1) return;
      changeDialogField({ tags: [ ...todo.tags, tag ] });
      tagInput.value = '';
    }
  }

  render() {
    const {
      subtaskAdding,
      tagAdding,
    } = this.state;
    const {
      newEntry,      
      addSubtask,
      addTag,
      subtaskInput,
      tagInput,
      onFieldChange
    } = this;
    const { todo } = this.props;

    return (
      <Fragment>
        <input
          styleName='input'
          type='text'
          name='title'
          placeholder='Todo title'
          onChange={ onFieldChange }
          defaultValue={ todo.title }
        />
        <textarea
          styleName='textarea'
          name='description'
          placeholder='todo description'
          onChange={ onFieldChange }
          defaultValue={ todo.description }
        />
        <div styleName='new-subtask'>
          {
            subtaskAdding && <input
              styleName='no-margin-input'
              type='text'
              placeholder='New subtask'
              name='subtask'
              ref={ subtaskInput }
              onChange= { newEntry }
              onKeyPress={ addSubtask }
            />
          }
          <Button
            label='add subtask'
            icon='add'
            onClick={ addSubtask }
          />
        </div>
        <List>
          {
            todo.subtasks.map(subtask => (
              <ListItem caption={ subtask.name } key={ subtask.name } />
            ))
          }
        </List>
        <div styleName='new-tag'>
          {
            tagAdding && <Fragment>
              <input
                styleName='no-margin-input'
                type='text'
                placeholder='New tag'
                name='tag'
                ref={ tagInput }
                onChange={ newEntry }
                onKeyPress={ addTag }
              />
            </Fragment>
          }
          <Button
            label='add tag'
            icon='add'
            onClick={ addTag }
          />
        </div>
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