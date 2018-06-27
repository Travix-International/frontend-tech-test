import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from './common/Button/Button';
import LinkTo from './common/LinkTo/LinkTo';

 class Controls extends Component {

  constructor(props) {
    super();
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo = () => {
    let taskID = this.props.taskID;
    this.props.deleteTask(taskID);
  }

  render() {

    const { viewTodoLabel, editTodoLabel, deleteTodoLabel, taskID } = this.props;

    return (
      <div className="controls">
        <LinkTo to={`/task/${taskID}`} customClass='button green' value={viewTodoLabel} />
        <LinkTo to={`/task/edit/${taskID}`} customClass='button blue' value={editTodoLabel} />
        <Button onClickFunc={this.deleteTodo} customClass="button red" value={deleteTodoLabel} />
      </div>
    );
  }
}

Controls.propTypes = {
  viewTodoLabel: PropTypes.string,
  editTodoLabel: PropTypes.string,
  deleteTodoLabel: PropTypes.string,
  taskID: PropTypes.number,
};

Controls.defaultProps = {
  viewTodoLabel: "View",
  editTodoLabel: "Edit",
  deleteTodoLabel: "Delete",
  taskID: 0
};

export default Controls;
