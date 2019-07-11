import "./styles.scss";
import React, { Component } from "react";
import { Circle, CheckCircle, PlusCircle } from "react-feather";
import TaskItem from "components/Item";
import Drawer from "components/Drawer";
import enhance from "./enhance";

class TasksList extends Component {
  state = {
    open: false,
    currentTask: null,
  };

  openDrawer = id => {
    this.setState({ currentTask: id, open: true });
  };

  closeDrawer = () => {
    this.setState({ currentTask: null, open: false });
  };

  componentDidMount() {
    this.props.fetchList();
  }

  handleFilter = e => {
    this.props.changeFilter(e.currentTarget.value);
  };

  render() {
    const { tasks, filter } = this.props;

    return (
      <div>
        <Drawer
          open={this.state.open}
          taskID={this.state.currentTask}
          onClose={this.closeDrawer}
        />

        <ul className="tasks-list">
          {tasks.map(({ id }) => (
            <li
              key={id}
              className="tasks-list__item"
              onClick={() => this.openDrawer(id)}
            >
              <TaskItem taskID={id} />
            </li>
          ))}
        </ul>

        <footer className="actions">
          <button
            className="actions__btn"
            value={filter === "done" ? "undone" : "done"}
            onClick={this.handleFilter}
          >
            {filter === "done" ? (
              <Circle size={32} />
            ) : (
              <CheckCircle size={32} />
            )}
          </button>
          <button
            className="actions__btn actions__btn_add"
            onClick={() => this.openDrawer()}
          >
            <PlusCircle size={32} />
          </button>
        </footer>
      </div>
    );
  }
}

export default enhance(TasksList);
