import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions/TodoListActions'

import { TodoForm, TodoList, TodoFooter, TodoLoading } from '../../components'

import './TodoBoard.css'

const columns = 'col-lg-6 col-md-8 col-sm-10 col-xs-12 col-lg-offset-3 col-md-offset-2 col-sm-offset-1'

class TodoBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      hasFailed: false
    }
  }

  componentWillMount() {
    const { fetchTodoList } = this.props

    fetchTodoList()
  }

  componentWillReceiveProps() {
    const { todo } = this.props

    if(todo && !todo.isLoading) {
      setTimeout(() => {
        this.setState({ isLoading: false })
        // Yep, intentionally faking loading for at least 2s
        // Our Node backend is running too fast :(
      }, 2000)
    }

    if(todo && todo.hasFailed) {
      this.setState({ hasFailed: todo.hasFailed })
    }
  }

  render() {
    const { isLoading } = this.state

    return (
      <div>
        <header className={`todo-header`}>
          <div className="container">
            <div className="row">
              <div className={columns}>
                <h1 className="todo-title">
                  <span className="todo-logo">
                    Todo <span className="label todo-logo-label">Manager</span>
                  </span>
                </h1>

                <p className="todo-subtitle">
                  Keep tracking of your daily activities
                </p>
              </div>
            </div>
          </div>
        </header>

        <section>
          <div className="container">
            <div className="row">
              <div className={columns}>
                <div className="todo-box">
                  <TodoForm />
                </div>

                { isLoading &&
                  <div className="todo-box todo-box-big-padding">
                    <TodoLoading />
                  </div>
                }

                { !isLoading &&
                  <div>
                    <div className="todo-box todo-box-big-padding">
                      <TodoList {...this.props} />
                      <div className="clearfix"></div>
                    </div>

                    <div className="todo-box">
                      <TodoFooter {...this.props} />
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </section>

        <footer className="todo-footer">
          <div className="container">
            <div className="row">
              <div className={columns}>
                <p className="todo-footer-text">
                  <span className="todo-logo">Todo <span className="label todo-logo-label todo-logo-label-small">Manager</span></span> was created by <a href="https://pedrofelipe.com.br">Pedro Felipe</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoBoard)
