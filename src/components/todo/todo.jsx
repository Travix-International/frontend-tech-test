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

  todo = React.createRef();

  openTodo = (e) => {
    const todoRef = this.todo.current;
    const checkbox = todoRef.querySelector('.js-isdone');
    const { todo, showDialog, setActiveTodo } = this.props;

    if (e.target.parentElement === checkbox
      || e.target.classList.contains('js-tag')) return;
    
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

  render() {
    const { todo, setTag } = this.props;
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
        ref={ this.todo }
      >
        <div styleName='body'>
          <p styleName='title'>{ title }</p>
          <p styleName='description'>{ description }</p>
          <div styleName='tags'>
            {
              tags.map(tag => (
                <span
                  className='js-tag'
                  styleName='tag'
                  key={ tag }
                  onClick={ setTag.bind(null, tag) }
                >{ tag }</span>
              ))
            }
          </div>
          <div styleName='subtasks'>{ (subtasks.length && `${subtasks.length} subtasks`) || '' }</div>
        </div>
        <div styleName='buttons'>
          <Checkbox
            className='js-isdone'
            checked={ isDone }
            onChange={ this.switchProgress }
          ></Checkbox>
        </div>
      </section>
    );
  }
}

export default CSSModules(Todo, styles);