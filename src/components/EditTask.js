import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import * as EditActions from './../actions';

class EditTask extends React.Component {
  static propTypes = {
    getTodoId: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      id: '',
      title: '',
      description: '',
      isEditing: true,
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    const { params } = this.props.match;
    if (params.id) {
      this.props.getTodoId(params.id).then((data) => {
        this.setValue(data.payload.todo);
      });
    }
    else {
      let td = { id: '', title: '', description: '' };
      this.props.todo = td;
    }
  }

  update() {
    const { id, title, description } = this.state;
    this.props.updateTodo(id, title, description).then((resp) => {
      this.setState({isEditing: true});
      this.props.history.go(-1);
    });
  }

  handleUserInput(e) {
    const name = e.target.getAttribute('name');;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  setValue(todo) {
    this.setState({id: todo.id, title: todo.title, description: todo.description});
  }

  render() {
    const { todo } = this.props;
    let isDisabled = true;
    if(todo.title && todo.description) {
      const temp = false;
      isDisabled = !todo.title || !todo.description || temp;
    }

    return (
      <form className="add-task">
        <p className="legend">Complete the form bellow to update your task</p>
        <TextField id="title"
            label="Title"
            className="title"
            margin="normal"
            name="title"
            onChange={this.handleUserInput}
            value={this.state.title}
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
          onChange={this.handleUserInput}
          value={this.state.description}
          required
        />
        <Button raised color="secondary" disabled={isDisabled} className="submit"
        onClick={this.update}>
          Submit
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTodoId: (id) => {
      return dispatch(EditActions.getTodoId(id));
    },
    updateTodo: (id, title, description) => {
      return dispatch(EditActions.editTodoTask(id, title, description));
    }
  };
};

const mapStateToProps = state => ({
  todo: state.todos.todo,
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);
