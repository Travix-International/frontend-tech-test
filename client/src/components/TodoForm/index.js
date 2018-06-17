import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './TodoForm.scss';
import { createTodo, updateTodo } from '../../actions/apiActions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      description: '',
      editing: false,
      showErrors: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isEditing === true) {
      this.setState({
        editing: nextProps.isEditing,
        title: nextProps.updatedTodo.title,
        description: nextProps.updatedTodo.description,
        id: nextProps.updatedTodo.id
      })
    } else {
      this.setState({
        editing: nextProps.isEditing
      })
    }
  }

  onChange(e) {
    this.setState({[e.target.name]: [e.target.value]})
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.title && this.state.description) {
      const todo = {
        title: this.state.title,
        description: this.state.description
      }

      if (this.state.editing) {
        todo.id = this.state.id;
        this.props.updateTodo(todo);
      } else {
        this.props.createTodo(todo);
      }

    } else {
      this.setState({showErrors: true})
    }

    this.setState({
      id: '',
      title: '',
      description: ''
    })
  }

  render() {
    const ed = this.state.editing;
    const err = this.state.showErrors;
    return (<div className="TodoForm" onSubmit={this.onSubmit}>
      <h5>Add new todo</h5>
      <form>
        <div className="form-group">
          <p className="error">{err ? 'Invalid data' : '' }</p>
          <input type="text" className="form-control" placeholder="title..." value={this.state.title} required onChange={this.onChange} name="title" autoComplete="off"/>
        </div>
        <div className="form-group">
          <p className="error">{err ? 'Invalid data' : '' }</p>
          <textarea className="form-control" placeholder="description..." rows="4" value={this.state.description} required onChange={this.onChange} name="description" autoComplete="off"/>
        </div>
        <button type="submit" name="button" className="btn btn-primary">{ed ? 'Change' : 'Submit'}</button>
      </form>
    </div>)
  }
}

const mapStateToProps = state => ({
  updatedTodo: state.api.updatedTodo.task,
  isEditing: state.api.isEditing
})

TodoForm.propTypes = {
  updatedTodo: PropTypes.object,
  isEditing: PropTypes.bool
}

export default connect(mapStateToProps, { createTodo, updateTodo })(TodoForm);
