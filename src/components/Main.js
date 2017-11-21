import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getTodos} from '../actions/todo'
import {TodoList, TodoForm} from '../components'
import {Section, Title, ErrorMessage} from "./styled/index";

class Main extends Component {

  componentWillMount() {
    this.props.getTodos();
  }

  render() {
    const {props} = this;

    if (props.isFetching) {
      return <h1>Loading...</h1>
    }

    return (
      <Section>
        <ErrorMessage>{props.errorMessage}</ErrorMessage>
        <Title>
          Todo App!
        </Title>
        <TodoForm/>
        <TodoList/>
      </Section>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos,
    errorMessage: state.todo.errorMessage
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getTodos
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main)