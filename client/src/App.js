import React, { Component } from "react";
import "./App.css";
import ModalTaskForm from "./ModalTaskForm";
import TasksTable from "./TasksTable";
import Pages from "./Pages";

function fetchDataFromServer(url, method, clb) {
  fetch(url, {method})
    .then(res => res.json())
    .then(res => clb(res))
    .catch(e => console.log(e));
}

class TasksManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowTaskForm: false,
      currentTaskId: null,
      tasks: [],
      newTitle: "",
      newDescription: "",
      checked: {},
      mainCheckBox: false,
      countShow: 10,
      currentPage: 1
    };

    this.allTasks = [];
    this.getTasks();

    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDeleteTasks = this.handleDeleteTasks.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.handleMainCheckBox = this.handleMainCheckBox.bind(this);
    this.handleCountShow = this.handleCountShow.bind(this);
    this.handlePages = this.handlePages.bind(this);
  }

  getTasks = () => {
    fetchDataFromServer("/tasks", "GET", res => {
      this.allTasks = res.tasks;
      let currentPage = this.state.currentPage;
      let pageCount = Math.ceil(this.allTasks.length / this.state.countShow);
      if ((currentPage > pageCount) && (pageCount > 0)) {
        currentPage = pageCount;
      }
      this.setState({
        currentPage: currentPage,
        tasks: this.allTasks.slice((currentPage - 1) * this.state.countShow, currentPage * this.state.countShow)
      });
    });
  };

  handleTitle(value) {
    this.setState({newTitle: value});
  }

  handleDescription(value) {
    this.setState({newDescription: value});
  }

  handleSubmit() {
    if (this.state.newTitle && this.state.newDescription) {
      let url = null;
      let method = null;
      if (this.state.currentTaskId !== null) {
        url = "/task/update/" + encodeURIComponent(this.state.currentTaskId);
        url += "/" + encodeURIComponent(this.state.newTitle);
        url += "/" + encodeURIComponent(this.state.newDescription);
        method = "PUT";
      } else {
        url = `/task/create/${encodeURIComponent(this.state.newTitle)}/${encodeURIComponent(this.state.newDescription)}`;
        method = "POST";
      }
      fetchDataFromServer(url, method, res => this.getTasks());
    }

    this.setState({
      currentTaskId: null,
      newTitle: "",
      newDescription: ""
    });

    this.toggleTaskForm();
  }

  toggleTaskForm = () => {
    this.setState({
      isShowTaskForm: !this.state.isShowTaskForm
    });
  };

  handleClose() {
    this.setState({
      currentTaskId: null,
      newTitle: "",
      newDescription: ""
    });
    this.toggleTaskForm();
  }

  handleUpdate(id) {
    let task = this.state.tasks.find(item => item.id === id);
    this.setState({
      currentTaskId: id,
      newTitle: task.title,
      newDescription: task.description
    });
    this.toggleTaskForm();
  }

  handleDeleteTasks() {
    var countDeletedTasks = 0;

    Object.keys(this.state.checked).forEach((id, index, arr) => {
      fetchDataFromServer(`/task/delete/${encodeURIComponent(id)}`, "DELETE", res => {
        countDeletedTasks++;
        if (countDeletedTasks === arr.length) {
          this.getTasks();
        }
      });
    });

    this.setState({
      checked: {},
      mainCheckBox: false
    });
  }

  handleChecked(e) {
    let checked = Object.assign({}, this.state.checked);
    if (e.target.checked) {
      checked[e.target.value] = e.target.checked;
    } else {
      delete checked[e.target.value];
    }
    this.setState({checked});
  }

  handleMainCheckBox(e) {
    let checked = {};
    if (e.target.checked) {
      this.state.tasks.forEach(item => checked[item.id] = true);
    }
    this.setState({
      checked: checked,
      mainCheckBox: e.target.checked
    });
  }

  handleCountShow(e) {
    let countShow = parseInt(e.target.value, 10);
    this.setState({
      countShow: countShow,
      currentPage: 1,
      tasks: this.allTasks.slice(0, countShow)
    });
  }

  handlePages(pageNumber) {
    this.setState({
      currentPage: pageNumber,
      tasks: this.allTasks.slice((pageNumber - 1) * this.state.countShow, pageNumber * this.state.countShow)
    });
  }

  render() {
    return (
      <div>
        <ModalTaskForm
          show={this.state.isShowTaskForm}
          taskId={this.state.currentTaskId}
          title={this.state.newTitle}
          description={this.state.newDescription}
          onTitleChange={this.handleTitle}
          onDescriptionChange={this.handleDescription}
          onSubmit={this.handleSubmit}
          onClose={this.handleClose}
        />
        <button onClick={this.handleDeleteTasks}>
          Delete
        </button>
        <button onClick={this.toggleTaskForm}>
          New task
        </button>
        <TasksTable
          tasks={this.state.tasks}
          checked={this.state.checked}
          mainCheckBox={this.state.mainCheckBox}
          onClickUpdate={this.handleUpdate}
          onToggleCheckBox={this.handleChecked}
          onMainCheckBoxUpdate={this.handleMainCheckBox}
        />
        <Pages
          countShow={this.state.countShow}
          taskCount={this.allTasks.length}
          currentPage={this.state.currentPage}
          onChangeCountShow={this.handleCountShow}
          onChangePage={this.handlePages}
        />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Tasks manager</h1>
        <TasksManager />
      </div>
    );
  }
}

export default App;