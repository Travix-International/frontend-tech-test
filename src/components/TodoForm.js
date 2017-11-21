import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addTodo, updateTodo} from '../actions/todo'
import {Button, Input, Form} from "./styled/index";

const TodoForm = (props, state) => {
  return (
    <Form onSubmit={e => {

      e.preventDefault()

      if (!e.target.title.value.trim() || !e.target.description.value.trim()) {
        return
      }

      const todo = {
        title: e.target.title.value,
        description: e.target.description.value
      };

      if (props.todo) {
        todo.id = props.todo.id;
        props.updateTodo(todo)
      }
      else {
        props.addTodo(todo);
        e.target.title.value = e.target.description.value = '';
      }

    }}>
      <Input defaultValue={props.todo && props.todo.title} type="text" name="title" placeholder="Title..."/>
      <Input defaultValue={props.todo && props.todo.description} type="textarea" name="description"
             placeholder="Description..."/>
      <Button type="submit">{props.todo ? 'Save' : 'Add'}</Button>
    </Form>
  )
};


const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = dispatch => bindActionCreators({
  addTodo,
  updateTodo
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)