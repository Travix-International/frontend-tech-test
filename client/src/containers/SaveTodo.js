import React from 'react';
import { connect } from 'react-redux';
import { saveTodo } from '../actions';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const mapStateToProps = (state, todo) => ({
  id: todo.id,
  title: todo.title,
  description: todo.description
});

export class SaveTodo extends React.Component {
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
    this.props.dispatch(saveTodo(this.props.id, title, description));
  };

  render() {
    const { title, description, editable } = this.props;

    if (!editable) return null;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          onChange={this.handleChange}
          name="title"
          className="editable"
          defaultValue={title}
        />
        <input
          onChange={this.handleChange}
          name="description"
          className="editable"
          defaultValue={description}
        />
        <button className="save-button" type="submit">
          <FontAwesomeIcon icon={faSave} />
        </button>
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(SaveTodo);
