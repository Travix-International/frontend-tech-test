import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './task.js';

let styles = {
  uList: {
    paddingLeft: 0,
    listStyleType: "none"
  },
  listGroup: {
    margin: '5px 0',
    borderRadius: 5
  },
  removeTask: {
    fontSize: 20,
    float: "left",
    position: "absolute",
    top: 12,
    left: 6,
    cursor: "pointer",
    color: "rgb(222, 79, 79)"
  },
  taskItem: {
    paddingLeft: 20,
    fontSize: 17
  }
};

export default class TodoList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render(){
    let handlelistItems = this.props.tasks.map((task, index) => {
      return (
        <div>
          <Task key={task.id} {...task} />
          <span
            className="glyphicon glyphicon-remove"
            style={styles.removeTask}
            onClick={this.props.remove.bind(null, index)}>
          </span>
        </div>
      )
    });
    return (
      <ul style={styles.uList}>
        {handlelistItems}
      </ul>
    )
  }
}

TodoList.propTypes = {
  tasks: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired
}
