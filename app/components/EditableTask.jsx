import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'travix-ui-kit';

export default class EditableTask extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.save = this.save.bind(this);
    const { title, description } = props;

    this.state = {
      title,
      description,
    };
  }

  handleInputChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  save() {
    this.props.onSave(this.state.title, this.state.description);
  }

  render() {
    const { onCancel } = this.props;
    const { title, description } = this.state;

    return (
      <div className="row edit">
        <div>
          <Input name="title" onChange={this.handleInputChange} type="text" value={title} />
          <Input name="description" onChange={this.handleInputChange} type="text" value={description} />
        </div>
        <div>
          <Button onClick={this.save}>Save</Button>
          <Button onClick={onCancel}>Cancel</Button>
        </div>
      </div>
    );
  }
}

EditableTask.propTypes = {
  description: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
