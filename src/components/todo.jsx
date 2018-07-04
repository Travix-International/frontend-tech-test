import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Checkbox from 'react-toolbox/lib/checkbox';

import styles from './todo.css';

class Todo extends PureComponent {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    isDone: PropTypes.bool,
    setActiveTodo: PropTypes.func,
    showDialog: PropTypes.func,
    updateTodo: PropTypes.func
  }

  todo = React.createRef();

  openTodo = (e) => {
    const todo = this.todo.current;
    const checkbox = todo.querySelector('.js-isdone');
    const { id, showDialog, setActiveTodo } = this.props;

    if (e.target.parentElement === checkbox) return;
    
    setActiveTodo(id);
    showDialog();
  }

  switchProgress = () => {
    const {
      id,
      title,
      description,
      isDone,
      updateTodo
    } = this.props;

    updateTodo({
      id,
      title,
      description,
      isDone: !isDone
    });
  }

  render() {
    const {
      title,
      description,
      isDone
    } = this.props;
    
    return (
      <section
        styleName={ isDone ? 'todo-done' : 'todo' }
        onClick={ this.openTodo }
        ref={ this.todo }
      >
        <div styleName='body'>
          <p styleName='title'>{ title }</p>
          <p styleName='description'>{ description }</p>
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