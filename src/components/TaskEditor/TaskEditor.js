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
  Button
} from 'reactstrap';
import { FiTrash2 } from 'react-icons/fi';
import flexCenter from '../flexCenter';
import styles from './TaskEditor.module.scss';

const DeleteButton = flexCenter(Button);
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
    this.titleRef = createRef();
    this.decriptionRef = createRef();
  }

  deleteTask = e => {
    e.preventDefault();
    const { task, onDelete, onToggle } = this.props;
    onDelete(task.id);
    onToggle();
  }

  submit = e => {
    e.preventDefault();

    const { task, onSubmit, onToggle } = this.props;
    const title = this.titleRef.current.value;
    const description = this.decriptionRef.current.value;

    const newTask = { title, description };
    if (task !== null) newTask['id'] = task.id;

    onSubmit(newTask);
    onToggle();
  }

  render () {
    const { open, task, onToggle } = this.props;
    const title = task === null ? 'Add task' : task.title;
  
    return (
      <Modal isOpen={open} toggle={onToggle}>
        <ModalHeader toggle={onToggle}>{title}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Title</Label>
              <Input
                bsSize="sm" 
                type="text" 
                placeholder="Enter task title" 
                innerRef={this.titleRef}
                defaultValue={task && task.title}
              />
            </FormGroup>
            <FormGroup>
              <Label>Description</Label>
              <Input 
                bsSize="sm"
                type="textarea" 
                placeholder="Give a description here"
                innerRef={this.decriptionRef}
                defaultValue={task && task.description}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          { 
            task !== null && 
            <DeleteButton
              className={styles['delete-btn']}
              size="sm"
              color="danger"
              onClick={this.deleteTask}
            >
              <FiTrash2 /> Delete
            </DeleteButton>
          }
          <div className={styles['btn-group']}>
            <Button size="sm" color="primary" onClick={this.submit}>Save</Button>
            <Button size="sm" color="secondary" onClick={onToggle}>Cancel</Button>
          </div>
        </ModalFooter>
      </Modal>
    );
  }
}


export default TaskEditor;