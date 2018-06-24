const React = require('react');
const { connect } = require('react-redux');
const { createTask } = require('../../actions');
const PropTypes = require('prop-types');

class CreateTask extends React.Component {
  constructor() {
    super();
    this.titleElement = React.createRef();
    this.descriptionElement = React.createRef();
    this.create = this.create.bind(this);
  }

  create(event) {
    event.preventDefault();
    const title = this.titleElement.current.value.trim();
    const description = this.descriptionElement.current.value.trim();
    // Check that both inputs have content
    if (title.length && description.length) {
      this.props.dispatch(createTask({ title, description }));
      this.titleElement.current.value = this.descriptionElement.current.value = '';
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <form
        className="createTask"
        onSubmit={this.create}
      >
        <input
          className="createTask__title card"
          placeholder="Title"
          ref={this.titleElement}
          required
        />
        <textarea
          className="createTask__description card"
          placeholder="Description"
          ref={this.descriptionElement}
          required
        />
        <button
          className="createTask__button"
          type="submit"
        >Create task</button>
      </form>
    );
  }
};

CreateTask.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

module.exports = connect()(CreateTask);
