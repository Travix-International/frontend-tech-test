import * as React from "react";
import { TodoListState, Todo } from "../../domain";
import { TodoApplicationService } from "../../application";
import TodoForm from "../containers/TodoForm";
import '../../assets/fonts/font-awesome.css';
import logo from '../../logo.svg';
import './TodoList.css';

export interface StateProps {
  todoList: TodoListState;
}

export interface DispatcherProps {
  service: TodoApplicationService;
}

type Props = StateProps & DispatcherProps;

interface State {
  editingTodoId?: string;
}

export class TodoList extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      editingTodoId: void 0
    }
  }

  componentDidMount() {
    this.props.service.init();
  }

  render() {
    const { loading, todos, hasError } = this.props.todoList;

    if (loading) {
      return this.renderLoading();
    }

    return (
      <div className="container">
        <nav className="navbar fixed-top navbar-dark bg-dark">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="navbar-brand">
            Todo Count: <span className="badge badge-pill badge-primary">{todos.length}</span>
          </h1>
        </nav>
        <div className="row mt-5">
          <br />
          {this.renderInput()}
          <hr />
        </div>
        <div className="row mt-5">
          <div className="col">
            {this.renderTodos(todos)}
            {hasError && <span style={{ color: "red" }}>There was an errors</span>}
          </div>
        </div>
      </div>
    );
  }

  private renderLoading() {
    return (
      <div>loading...</div>
    )
  }

  private renderTodos(todos: Todo[]) {
    return (
      <ul className="list-group">
        {todos.map(todo => this.renderTodo(todo))}
      </ul>
    );
  }

  private renderTodo(todo: Todo) {
    return (
      <li className="list-group-item" key={todo._id}>
        <div>
          <span onClick={() => this.onClickTitle(todo._id)} style={{ display: "inline-block", width: "90%", wordWrap: "break-word" }}>
            {
              this.state.editingTodoId === todo._id
                ?
                <TodoForm title={todo.title} idForEdit={todo._id} onEnter={() => this.onEnter()} />
                :
                <h4 className="list-group-item-heading">{todo.title}</h4>
            }
          </span>
        </div>
        <div style={{ marginTop: "10px" }}>
          <button className="btn btn-primary-alt" style={{ marginRight: "10px" }} onClick={() => this.onClickTitle(todo._id)}>
            <span><i className="fa fa-edit" aria-hidden="true" /></span></button>
          <button className="btn btn-danger" onClick={() => this.onClickDelete(todo._id)}>
            <span><i className="fa fa-trash-o" aria-hidden="true" /></span></button>
        </div>
      </li>
    );
  }

  private onEnter() {
    this.setState({ editingTodoId: void 0 })
  }

  private onClickTitle(id: string) {
    this.setState({ editingTodoId: id });
  }

  private onClickDelete(id: string) {
    this.props.service.deleteTodo(id);
  }

  private renderInput() {
    return (
      <div className="col">
        <br /><br /><br />
        <h4>Add New Todo</h4><br />
        <div className="group-item">
          <TodoForm />
        </div>
      </div>
    );
  }
}
