const React = require('react');
const { connect } = require('react-redux');
const { updateTask, deleteTask } = require('../actions');

const Task = ({ id, title, description, dispatch }) => (
  <li>
    <header>({id}) {title}</header>
    <p>{description}</p>
    <button onClick={() => dispatch(deleteTask(id))}>Delete</button>
  </li>
);

module.exports = connect()(Task);