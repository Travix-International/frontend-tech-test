import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'travix-ui-kit';

export default class EditableTask extends React.Component {
  constructor(props) {
    super(props);
    const { title, description } = props;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      title,
      description,
    };
  }

  handleInputChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  submit() {
    this.props.onSave(this.state.title, this.state.description);
  }

  handleKeyDown({ keyCode }) {
    if (keyCode === 13) {
      this.submit();
    }
  }

  componentDidMount() {
    this.inputTitle.focus();
  }

  render() {
    const { onCancel } = this.props;
    const { title, description } = this.state;

    return (
      <div className="row edit" onKeyDown={this.handleKeyDown}>
        <div className="container">
          <div className="col-6">
            <Input
              name="title" onChange={this.handleInputChange} ref={(input) => { this.inputTitle = input; }}
              value={title}
            />
          </div>
          <div className="col-6">
            <Input name="description" onChange={this.handleInputChange} value={description} />
          </div>
        </div>
        <div className="container center">
          <Button onClick={this.submit} size="s">Save</Button>
          <Button onClick={onCancel} size="s">Cancel</Button>
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
