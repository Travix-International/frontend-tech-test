import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

export class AddTodo extends React.Component {
  state = {
    title: '',
    description: ''
  };

  titleInput = React.createRef();

  handleChange = ({ target }) => {
    this.setState(state => {
      return {
        ...state,
        [target.name]: target.value
      };
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const formElements = event.target.elements;
    const title = formElements.title.value.trim();
    const description = formElements.description.value.trim();

    this.props.dispatch(addTodo(title, description));
    this.setState({ title: '', description: '' });
    this.titleInput.current.focus();
  };

  render() {
    const { title, description } = this.state;

    return (
      <div id="add-todo">
        <form onSubmit={this.onSubmit}>
          <input
            ref={this.titleInput}
            onChange={this.handleChange}
            name="title"
            placeholder="what do I need to do?"
            value={title}
            required
          />
          <input
            onChange={this.handleChange}
            name="description"
            placeholder="some description..."
            value={description}
            required
          />
          <button type="submit">Add To-Do</button>
        </form>
        <div style={{ clear: 'both' }} />
      </div>
    );
  }
}

export default connect()(AddTodo);
