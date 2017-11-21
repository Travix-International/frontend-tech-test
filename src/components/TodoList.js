import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {TodoForm} from './'

import {getTodos, deleteTodo, updateTodo, setEditable} from '../actions/todo'

import {ItemList, Item, ItemWrapper, ItemContent, ItemButtons, Button, Title, Description} from "./styled/index";

const TodoList = (props, state) => {
  return (
    <ItemList>
      {props.todos.map(todo => {
        return <Item key={todo.id}>
          {
            props.editableTodo === todo.id ?
              <TodoForm todo={todo}/>
              :
              <ItemWrapper>
                <ItemContent>
                  <Title isDone={todo.isDone}>{todo.title}</Title>
                  <Description isDone={todo.isDone}>{todo.description}</Description>
                </ItemContent>
                <ItemButtons>
                  <Button onClick={() => {
                    todo.isDone = !todo.isDone;
                    props.updateTodo(todo)
                  }}>
                    {todo.isDone ? 'Undo' : 'Done'}
                  </Button> <Button onClick={() => props.setEditable(todo.id)}>Edit</Button>
                  <Button onClick={() => props.deleteTodo(todo.id)}>Delete</Button>
                </ItemButtons>
              </ItemWrapper>
          }
        </Item>
      })
      }
    </ItemList>
  )
};


const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos,
    editableTodo: state.todo.editableTodo
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getTodos,
  deleteTodo,
  updateTodo,
  setEditable
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)