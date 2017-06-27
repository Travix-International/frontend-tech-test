import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {

  constructor(props = {}) {
    super(props);
    const {
      id = '',
      title = '',
      description = ''
    } = props;

    this.state = {
      id,
      title,
      description
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { id, title, description } = this.state;
    const { onSubmit } = this.props;

    return (
      <div className="task-form">
        <div className="task-form-inputs">
          <input type="text" placeholder="Type title here..." name="title" value={title} onChange={this.handleInputChange} />
          <input type="text" placeholder="Type description here..." name="description" value={description} onChange={this.handleInputChange} />
          <input type="hidden" name="id" value={id} />
        </div>
        <div>
          <button type="submit" onClick={() => onSubmit(this.state)}>Save</button>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  form: PropTypes.object,
  createTask: PropTypes.func,
  updateTask: PropTypes.func,
  loadList: PropTypes.func,
  onSubmit: PropTypes.func.isRequired
};
