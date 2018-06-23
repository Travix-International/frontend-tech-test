const React = require('react');
const { connect } = require('react-redux');
const Task = require('../components/Task');
const NoResults = require('../components/NoResults');
const { listTasks } = require('../actions');

class List extends React.Component {
  componentDidMount () {
    this.props.listTasks();
  }
  
  render() {
    return (
      this.props.tasks.length ?
        <ol className="tasks">
          {this.props.tasks.map((task, index) => (
            <Task
              key={index}
              {...task}
            />
          ))}
        </ol>
      :
        <NoResults />
    )
  }
};

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  listTasks() {
    dispatch(listTasks());
  },
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);