import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  loadList,
  loadItem,
  remove as removeTask,
  create as createTask,
  update as updateTask
} from './../reducers/task';
import TaskList from './../components/List';
import ItemForm from './../components/Form';

@connect(state => ({
  list: state.task.list,
  isDoing: state.task.form.saving
}), {
  loadList,
  loadItem,
  createTask,
  updateTask,
  removeTask
})
export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onItemDeleteClick = this.onItemDeleteClick.bind(this);
    this.onItemEditClick = this.onItemEditClick.bind(this);
  }

  componentDidMount() {
    this.props.loadList();
  }

  onFormSubmit({id = null, title, description}) {
    if (!title || !description) {
      return;
    }

    if (id) {
      this.props.updateTask(id, title, description);
    } else {
      this.props.createTask(title, description);
    }
  }

  onItemDeleteClick(id) {
    if(confirm('Are you sure you want to delete this?')) {
      this.props.removeTask(id);
    }
  }

  render() {
    const { isDoing } = this.props;

    return (
      <div>
        <TaskList { ...this.props.list }
                  onFormSubmit={this.onFormSubmit}
                  onDeleteClick={this.onItemDeleteClick} />
        { !isDoing && <ItemForm onSubmit={this.onFormSubmit} /> }
      </div>
    );
  }
}

App.propTypes = {
  list: PropTypes.array,
  isDoing: PropTypes.bool,
  loadList: PropTypes.func,
  loadItem: PropTypes.func,
  createTask: PropTypes.func,
  updateTask: PropTypes.func,
  removeTask: PropTypes.func
};
