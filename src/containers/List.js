const React = require('react');
const { connect } = require('react-redux');
const Task = require('../components/Task');
const NoResults = require('../components/NoResults');
const { listTasks } = require('../actions');
const PropTypes = require('prop-types');

class List extends React.Component {
  componentDidMount() {
    this.props.listTasks();
  }

  componentDidUpdate() {
    if (this.props.tasks) {
      window.scrollTo(0, 0);
    }
  }

  list() {
    this.props.listTasks(this.props.page + 1);
  }

  render() {
    const { tasks, page, total, limit } = this.props;
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
                onClick={this.list}
              >Load more</button>}
          </li>
        </ol>
      :
        <NoResults />
    )
  }
};

List.propTypes = {
  limit: PropTypes.number,
  listTasks: PropTypes.func.isRequired,
  page: PropTypes.number,
  tasks: PropTypes.array.isRequired,
  total: PropTypes.number,
};

List.defaultProps = {
  limit: 10,
  page: 0,
  total: 0,
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
