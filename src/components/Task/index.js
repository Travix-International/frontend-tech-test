const React = require('react');
const { connect } = require('react-redux');
const { updateTask } = require('../../actions');
const ToggleButton = require('../ToggleButton');
const DeleteButton = require('../DeleteButton');
const PropTypes = require('prop-types');

class Task extends React.Component {
  constructor() {
    super();
    this.titleElement = React.createRef();
    this.descriptionElement = React.createRef();
    this.update = this.update.bind(this);
  }

  update() {
    this.props.dispatch(updateTask({
      id: this.props.id,
      title: this.titleElement.current.textContent.trim(),
      description: this.descriptionElement.current.textContent.trim(),
    }))
  }

  render() {
    const { id, title, description, completed } = this.props;
    return (
      <li className={`card task${completed ? ' task--completed' : ''}`}>
        <header
          className="card__title"
          contentEditable={!completed}
          onBlur={this.update}
          ref={this.titleElement}
          suppressContentEditableWarning={!completed}
        >{title}</header>
        <p
          className="card__description"
          contentEditable={!completed}
          onBlur={this.update}
          ref={this.descriptionElement}
          suppressContentEditableWarning={!completed}
        >{description}</p>

        <ToggleButton completed={completed} id={id} />
        <DeleteButton id={id} />
      </li>
    );
  };
};

Task.propTypes = {
  completed: PropTypes.bool,
  description: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

Task.defaultProps = {
  completed: false,
};

module.exports = connect()(Task);
