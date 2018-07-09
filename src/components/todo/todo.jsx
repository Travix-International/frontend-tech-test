import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Checkbox from 'react-toolbox/lib/checkbox';

import styles from './todo.css';

class Todo extends PureComponent {
  static propTypes = {
    todo: PropTypes.object,
    setActiveTodo: PropTypes.func,
    showDialog: PropTypes.func,
    updateTodo: PropTypes.func,
    setTag: PropTypes.func
  }

  preventOpenTodo = (e) => {
    e.stopPropagation();
  }

  openTodo = () => {
    const { todo, showDialog, setActiveTodo } = this.props;

    setActiveTodo(todo.id);
    showDialog();
  }


  switchProgress = () => {
    const {
      todo,
      updateTodo
    } = this.props;

    updateTodo({ ...todo, isDone: !todo.isDone });
  }

  setTag = (tag, e) => {
    this.preventOpenTodo(e);

    this.props.setTag(tag);
  }

  render() {
    const { todo } = this.props;
    const {
      title,
      description,
      tags,
      subtasks,
      isDone
    } = todo;
    
    return (
      <section
        styleName={ isDone ? 'todo-done' : 'todo' }
        onClick={ this.openTodo }
      >
        <div styleName='body'>
          <p styleName='title'>{ title }</p>
          <p styleName='description'>{ description }</p>
          <div styleName='tags'>
            {
              tags.map(tag => (
                <span
                  styleName='tag'
                  key={ tag }
                  onClick={ this.setTag.bind(null, tag) }
                >{ tag }</span>
              ))
            }
          </div>
          <div styleName='subtasks'>{ (subtasks.length && `${subtasks.length} subtasks`) || '' }</div>
        </div>
        <div onClick={ this.preventOpenTodo } styleName='buttons'>
          <Checkbox
            checked={ isDone }
            onChange={ this.switchProgress }
          ></Checkbox>
        </div>
      </section>
    );
  }
}

export default CSSModules(Todo, styles);