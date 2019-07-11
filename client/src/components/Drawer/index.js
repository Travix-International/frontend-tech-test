import "./styles.scss";
import React, { Component } from "react";
import { X } from "react-feather";
import enhance from "./enhance";

class Drawer extends Component {
  state = {
    title: "",
    description: "",
    mode: "create",
  };

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
              <div>{mode === "create" ? "Create" : "Change"} task</div>

              <X className="drawer__close-icon" onClick={this.handleClose} />
            </header>

            <div className="text-field">
              <label>
                <div className="text-field__label">Title</div>
                <input
                  ref={el => (this.title = el)}
                  className="text-field__input"
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.changeHandler}
                />
              </label>
            </div>

            <div className="text-field">
              <label>
                <div className="text-field__label">Description</div>
                <textarea
                  className="text-field__input"
                  name="description"
                  value={description}
                  rows={10}
                  onChange={this.changeHandler}
                />
              </label>
            </div>

            <footer className="form__footer">
              <button
                value={mode}
                className="button button_primary"
                onClick={this.handleSubmit}
              >
                Save
              </button>
              {mode === "change" && (
                <button
                  value="remove"
                  className="button"
                  onClick={this.handleSubmit}
                >
                  Remove
                </button>
              )}
            </footer>
          </form>
        </div>
      </div>
    );
  }
}

export default enhance(Drawer);
