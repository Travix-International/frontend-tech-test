import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { ListCheckbox } from 'react-toolbox/lib/list';

import styles from './dialogdata.css';

class DialogData extends PureComponent {
  static propTypes = {
    todo: PropTypes.object,
    updateTodo: PropTypes.func
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
    const { todo: { title, description, tags, subtasks } } = this.props;
    const { checkSubtask } = this;

    return (
      <Fragment>
        <div styleName='title'>{ title }</div>
        <div styleName='description'>{ description }</div>
        <div>
          { (subtasks.length && <div styleName='subtasks'>Subtasks:</div>) || '' }
          {
            subtasks.map(subtask => (
              <ListCheckbox
                styleName='subtask'
                checked={ subtask.isDone }
                caption={ subtask.name }
                key={ subtask.name }
                onChange={ checkSubtask.bind(this, subtask.name) }
              />
            ))
          }
        </div>
        <div styleName='tags'>
          {
            tags.map(tag => (
              <span styleName='tag' key={ tag } >{ tag }</span>
            ))
          }
        </div>
      </Fragment>
    );
  }
}

export default CSSModules(DialogData, styles);