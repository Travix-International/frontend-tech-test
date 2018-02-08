import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import * as ListActions from './../actions'

class List extends React.Component {
  static propTypes = {
    getTodos: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getTodos();
  }

  renderLegend() {
    const style = {
      margin: 12,
    }

    return (
      <div className="list-legend">
        <p>Why do not you try to create your first task ...</p>
        <Link to="/add">
          <Button raised color="primary" style={style}>Create First Task</Button>
        </Link>
      </div>
    );
  }

  renderTodos() {
    const { todos } = this.props;
    return (
      <div className="list-task">
        { todos.todos.map((todo) =>
          <Card className="list-task-card" key={todo.id}>
            <CardContent>
              <h2 className="list-task-card-title">{ todo.title }</h2>
              <p className="list-task-card-description">{ todo.description }</p>
            </CardContent>
            <CardActions>
              <Link className="list-task-card-link" to={`/task/${todo.id}`}>
                <Button className="list-task-card-btn" raised color="primary" size="small">Edit Task</Button>
              </Link>
            </CardActions>
          </Card>
        )}
      </div>
    );
  }

  render() {
    const { todos } = this.props;
    debugger;
    const content = todos.todos.length > 0 ? this.renderTodos() : this.renderLegend();

    return (
      <section className="list">
        { content }
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => {
      dispatch(ListActions.getTodoTaskList());
    }
  };
};

const mapStateToProps = state => ({
  todos: state.todos,
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
