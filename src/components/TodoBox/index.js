import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { getTodos } from '../../actions/todoActions';

import Todo from '../Todo';

class TodoBox extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.dispatch(getTodos());
  }

  render(){
    return (
      <div class="todo-box">
        {this.props.todos.map(todo => {
        return <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
          dispatch={this.props.dispatch}
         />;
       })}
      </div>
    );
  }
}

TodoBox.propTypes = {
  todos: PropTypes.array,
  dispatch: PropTypes.func
}

export default TodoBox;