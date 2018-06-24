const React = require('react');
const { connect } = require('react-redux');
const Task = require('../components/Task');
const NoResults = require('../components/NoResults');
const { listTasks } = require('../actions');

class List extends React.Component {
  componentDidMount() {
    this.props.listTasks();
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const { tasks, page, total, limit, listTasks } = this.props;
    return (
      tasks.length ?
        <ol className="tasks">
          {tasks.map((task, index) => (
            <Task
              key={index}
              {...task}
            />
          ))}
          <li className="tasks__nextContainer">
            {page * limit < total &&
              <button
                className="tasks__nextButton"
                onClick={() => listTasks(this.props.page + 1)}
              >Load more</button>}
          </li>
        </ol>
      :
        <NoResults />
    )
  }
};

const mapStateToProps = state => ({
  tasks: state.tasks,
  page: state.page || 0,
  total: state.total,
  limit: state.limit,
});

const mapDispatchToProps = dispatch => ({
  listTasks(page) {
    dispatch(listTasks(page));
  },
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
