import "./styles.scss";
import React, { Component } from "react";
import { X } from "react-feather";
import TextField from "components/TextField";
import Button from "components/Button";
import enhance from "./enhance";

export class Drawer extends Component {
  state = {
    title: "",
    description: "",
    mode: "create",
  };

  componentDidMount() {
    this.setState({
      mode: !!this.props.task ? "change" : "create",
    });
  }

  componentDidUpdate(oldProps) {
    const { task, open } = this.props;

    if (open && !oldProps.open) {
      this.title.focus();

      if (task) {
        this.setState({
          title: task.title,
          description: task.description,
          mode: "change",
        });
      }
    }
  }

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { value } = e.target;

    if (this.props[value]) {
      const { title, description } = this.state;

      this.props[value]({
        ...this.props.task,
        title,
        description,
      });

      this.handleClose();
    }
  };

  handleClose = () => {
    this.setState({
      title: "",
      description: "",
      mode: "create",
    });

    this.props.onClose();
  };

  render() {
    const { open } = this.props;
    const { title, description, mode } = this.state;

    return (
      <div className={`drawer ${open && "drawer_open"}`}>
        <div className="drawer__overlay" onClick={this.handleClose} />
        <div className="drawer__container">
          <form className="form">
            <header className="form__header">
              <div>{mode === "create" ? "Create a" : "Change the"} task</div>

              <X className="drawer__close-icon" onClick={this.handleClose} />
            </header>

            <TextField
              label="Title"
              innerRef={el => (this.title = el)}
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />

            <TextField
              label="Description"
              component="textarea"
              name="description"
              value={description}
              rows={10}
              onChange={this.changeHandler}
            />

            <footer className="form__footer">
              <Button primary={true} value={mode} onClick={this.handleSubmit}>
                Save
              </Button>

              {mode === "change" && (
                <Button value="remove" onClick={this.handleSubmit}>
                  Remove
                </Button>
              )}
            </footer>
          </form>
        </div>
      </div>
    );
  }
}

export default enhance(Drawer);
