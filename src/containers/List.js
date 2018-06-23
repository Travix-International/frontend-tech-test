const React = require('react');
const { connect } = require('react-redux');
const Task = require('../components/Task');
const { listTasks } = require('../actions');

class List extends React.Component {
  componentDidMount () {
    this.props.listTasks();
  }
  
  render() {
    return (
      this.props.tasks.length ?
        <ul>
          {this.props.tasks.map((task, index) => (
            <Task
              key={index}
              {...task}
            />
          ))}
        </ul>
      :
        // Zero results
        <p>Seems like there are no tasks to do.</p>
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