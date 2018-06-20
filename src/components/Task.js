const React = require('react');

const Task = ({ title, description }) => (
  <li>
    <p>title: {title}</p>
    <p>description: {description}</p>
  </li>
);

module.exports = Task;