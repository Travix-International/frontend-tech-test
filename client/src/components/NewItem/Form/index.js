import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
    };
  }

  clearForm = () => {
    this.setState({
      title: "",
      description: "",
    });
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.clearForm();
  };

  render() {
    const { title, description } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.changeHandler}
        />

        <textarea
          name="description"
          value={description}
          onChange={this.changeHandler}
        />
      </form>
    );
  }
}

export default Form;
