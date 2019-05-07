import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  FormFeedback
} from 'reactstrap';
import { debounce } from 'lodash';

class TaskEditor extends React.PureComponent {
  static propTypes = {
    open: PropTypes.bool,
    task: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.string
    }),
    onToggle: PropTypes.func,
    onSubmit: PropTypes.func,
    onDelete: PropTypes.func
  }
  
  static defaultProps = {
    open: false,
    task: null,
    onToggle: () => {},
    onSubmit: () => {},
    onDelete: () => {}
  };

  constructor (props) {
    super(props);
    this.state = {
      // Don't show error message initially when creates a new task
      validTitle: this.props.task === null || !!this.props.task.title
    };
    this.titleRef = createRef();
    this.decriptionRef = createRef();

    this.validateTitle = debounce(this.validateTitle, 300);
  }

  deleteTask = e => {
    e.preventDefault();
    const { task, onDelete, onToggle } = this.props;
    onDelete(task.id);
    onToggle();
  }

  submit = e => {
    e.preventDefault();
    if (!this.state.validTitle) return;

    const { task, onSubmit, onToggle } = this.props;
    const title = this.titleRef.current.value;
    const description = this.decriptionRef.current.value;

    const newTask = { title, description };
    if (task !== null) newTask['id'] = task.id;

    onSubmit(newTask);
    onToggle();
  }

  validateTitle = title => {
    let valid = this.state.validTitle;

    if (title.length === 0) {
      valid = false;
    } else if (!valid) {
      valid = true;
    }

    console.log('######validatetitle')

    this.setState(prevState => ({
      validTitle: valid
    }));
  }

  onEditTitle = e => {
    
    this.validateTitle(this.titleRef.current.value);
  }

  render () {
    const { open, task, onToggle } = this.props;
    const { validTitle } = this.state;
  
    const title = task === null ? 'Add task' : task.title;
  
    return (
      <Modal isOpen={open} toggle={onToggle}>
        <ModalHeader toggle={onToggle}>{title}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Title</Label>
              <Input 
                invalid={!validTitle}
                type="text" 
                placeholder="Enter task title" 
                innerRef={this.titleRef}
                defaultValue={task && task.title}
                onChange={this.onEditTitle}
              />
              { !validTitle && <FormFeedback>Task title is not valid</FormFeedback> }
            </FormGroup>
            <FormGroup>
              <Label>Description</Label>
              <Input 
                type="textarea" 
                placeholder="Give a description here"
                innerRef={this.decriptionRef}
                defaultValue={task && task.description}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          { task !== null && <Button color="danger" onClick={this.deleteTask}>Delete</Button> }
          <Button color="primary" onClick={this.submit}>Save</Button>
          <Button color="secondary" onClick={onToggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}


export default TaskEditor;