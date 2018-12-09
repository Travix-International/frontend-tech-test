import React from 'react';
import { Input, Button, Modal } from 'travix-ui-kit';
import LABELS from '../../constants/labels';
import types from '../../constants/types';

class TaskInput extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      title: '',
      description: '',
      showForm: false,
      isOpenBaseModal: false
    }
  }
  _onFocus (e) {
    this.setState ({
      showForm: true
    });
  }

  _hideForm (e) {
    this.setState ({
      showForm: false
    });
  }
  _onTitleChange (e) {
    const title = e.target.value;
    this.setState ({
      title
    });
  }

  _onDescChange (e) {
    const description = e.target.value;
    this.setState ({
      description
    });
  }

  _onFormSubmit (e) {
    e.preventDefault ();
    if (!this.state.title) {
      this.setState ({
        isOpenBaseModal: true
      });
    } else {
      const { title, description } = this.state;
      this.setState ({
        title: '',
        description: ''
      });
      this.props.createTask ({
        title,
        description,
        'isCompleted': 'false'
      });
      this.setState ({
        showForm: false
      });
    }
  }

  render () {
    return (
      <form onSubmit={ this._onFormSubmit.bind (this) }>
        <Modal
          active={ this.state.isOpenBaseModal }
          onClose={ () => this.setState({ isOpenBaseModal: false }) }>
            Title is mandatory field.
        </Modal>
        <div className='task-input-container'>
          <div className='task-input-title'>
            <Input
              value={ this.state.title }
              onChange={ this._onTitleChange.bind (this) }
              onFocus={ this._onFocus.bind (this) }
              placeholder={ LABELS.INPUT.PLACEHOLDER.TITLE } />
          </div>
          <div className={`task-input-description ${this.state.showForm ? 'show-form' : ''}`}>
            <Input
              value={ this.state.description }
              onChange={ this._onDescChange.bind (this) }
              multiline
              placeholder={ LABELS.INPUT.PLACEHOLDER.DESCRIPTION } />
            <div className='form-action'>
              <Button
                onClick={ this._hideForm.bind(this) }
                variation="ghost"
                size="s">
                Cancel
              </Button>

              <Button
                onClick={ this._onFormSubmit.bind (this) }
                variation="ghost"
                size="s">
                Add Task
              </Button>
            </div>

          </div>
        </div>
      </form>
    )
  }
}

TaskInput.propTypes = {
  createTask: types._function
}

export default TaskInput;
