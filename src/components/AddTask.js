import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import * as AddActions from './../actions';

class AddTask extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: '',
      description: '',
      isSending: false,
    };
  }

  create() {
    const {dispatch} = this.props;
    const {title, description} = this.state;
    this.setState({isSending: true});
    dispatch(AddActions.createTodoTask({title, description})).then((resp) => {
      this.props.history.go(-1);
    });
  }

  handleUserInput(e) {
    const name = e.target.getAttribute('name');;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  render() {
    const {title, description, isSending} = this.state;
    const isDisabled = !title || !description || isSending;

    return (
      <form className="add-task">
        <p className="legend">Complete the form bellow to add a new task</p>
        <TextField id="title"
            label="Title"
            className="title"
            margin="normal"
            name="title"
            onChange={(event) => this.handleUserInput(event)}
            required
          />
        <TextField
          id="multiline-static"
          label="Description"
          multiline
          rows="4"
          className="description"
          margin="normal"
          name="description"
          onChange={(event) => this.handleUserInput(event)}
          required
        />
        <Button raised color="secondary" disabled={isDisabled} className="submit"
        onClick={(event) => this.create(event)}>
          Submit
        </Button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: '',
    description: '',
  };
};

export default connect(mapStateToProps)(AddTask);
