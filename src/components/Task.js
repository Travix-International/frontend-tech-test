const React = require('react');
const { connect } = require('react-redux');
const { updateTask } = require('../actions');

const Task = ({ id, title, description }) => (
  <li>
    <header>({id}) {title}</header>
    <p>{description}</p>
  </li>
);

module.exports = connect()(Task);