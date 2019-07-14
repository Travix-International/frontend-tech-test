import "./styles.scss";
import React, { Component } from "react";
import { Circle, CheckCircle, PlusCircle } from "react-feather";
import TaskItem from "components/Item";
import Drawer from "components/Drawer";
import Fab from "components/Fab";
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
    this.props.socketConnect();
    this.props.fetchList();
  }

  componentWillUnmount() {
    this.props.socketDisconnect();
  }

  handleFilter = e => {
    this.props.changeFilter(e.currentTarget.value);
  };

  render() {
    const { open, currentTask } = this.state;
    const { tasks, filter } = this.props;

    return (
      <div>
        <Drawer open={open} taskID={currentTask} onClose={this.closeDrawer} />

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
          <Fab
            value={filter === "done" ? "undone" : "done"}
            onClick={this.handleFilter}
          >
            {filter === "done" ? (
              <Circle size={32} />
            ) : (
              <CheckCircle size={32} />
            )}
          </Fab>
          <Fab primary={true} onClick={() => this.openDrawer()}>
            <PlusCircle size={32} />
          </Fab>
        </footer>
      </div>
    );
  }
}

export default enhance(TasksList);
