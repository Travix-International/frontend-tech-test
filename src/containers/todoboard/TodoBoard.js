import React, { Component } from 'react'

import { TodoForm, TodoList, TodoFooter } from '../../components'

import './TodoBoard.css'

const columns = 'col-lg-6 col-md-8 col-sm-10 col-xs-12 col-lg-offset-3 col-md-offset-2 col-sm-offset-1'

export default class TodoBoard extends Component {
  render() {
    return (
      <div>
        <header className="todo-header">
          <div className="container">
            <div className="row">
              <div className={columns}>
                <h1 className="todo-title">
                  <span className="todo-logo">
                    Todo <span class="label todo-logo-label">Manager</span>
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
                <div class="todo-box">
                  <TodoForm />
                  <TodoList tasks={[]} />
                  <TodoFooter />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="todo-footer">
          <div className="container">
            <div className="row">
              <div className={columns}>
                <p className="todo-footer-text">
                  <span className="todo-logo">Todo <span class="label todo-logo-label todo-logo-label-small">Manager</span></span> was created by <a href="https://pedrofelipe.com.br">Pedro Felipe</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
