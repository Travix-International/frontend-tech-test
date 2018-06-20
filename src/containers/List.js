const React = require('react');
const { connect } = require('react-redux');
const Task = require('../components/Task');

const List = ({ tasks }) => (
  <ul>
    {tasks.map((task, index) => (
      <Task
        key={index}
        {...task}
      />
    ))}
  </ul>
);

const mapStateToProps = state => ({
  tasks: state.tasks,
});

module.exports = connect(mapStateToProps)(List);