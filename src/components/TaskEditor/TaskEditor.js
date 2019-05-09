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
import { flexCenter } from '../flexCenter';
import { withSpinner } from '../withSpinner';
import styles from './TaskEditor.module.scss';

const DeleteButton = flexCenter(withSpinner(Button));
const SaveButton = withSpinner(Button);

class TaskEditor extends React.PureComponent {
  static propTypes = {
    open: PropTypes.bool,
    task: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.string
    }),
    savingTask: PropTypes.bool,
    deletingTask: PropTypes.bool,
    onToggle: PropTypes.func,
    onSubmit: PropTypes.func,
    onDelete: PropTypes.func
  }
  
  static defaultProps = {
    open: false,
    task: null,
    savingTask: false,
    deletingTask: false,
    onToggle: () => {},
    onSubmit: () => {},
    onDelete: () => {}
  };

  static getDerivedStateFromProps (nextProps, prevState) {
    const pending = nextProps.savingTask || nextProps.deletingTask;
    const submitting = prevState.saving || prevState.deleting;

    // if state changed from submitting to resolved
    if (submitting && !pending) {
      return {
        saving: false,
        deleting: false,
        shouldClose: true
      };
    } else if (prevState.shouldClose) {
      // set shouldClose back to false to avoid
      // infinite rerender
      return {
        shouldClose: false
      }
    }

    return null;
  }

  constructor (props) {
    super(props);
    this.titleRef = createRef();
    this.decriptionRef = createRef();
    this.state = {
      saving: false,
      deleting: false,
      shouldClose: false
    };
  }

  componentDidUpdate () {
    if (this.state.shouldClose) {
      this.props.onToggle();
    }
  }

  deleteTask = e => {
    e.preventDefault();
    const { task, onDelete } = this.props;
    onDelete(task.id);
    this.setState(prevState => ({
      deleting: true
    }));
  }

  submit = e => {
    e.preventDefault();

    const { task, onSubmit } = this.props;
    const title = this.titleRef.current.value;
    const description = this.decriptionRef.current.value;

    const newTask = { title, description };
    if (task !== null) newTask['id'] = task.id;

    onSubmit(newTask);
    this.setState(prevState => ({
      saving: true
    }));
  }

  render () {
    const { open, task, onToggle } = this.props;
    const title = task === null ? 'Add task' : task.title;
    const { saving, deleting } = this.state;
  
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
              spinnerSize="sm"
              spinnerColor="light"
              color="danger"
              isPending={deleting}
              onClick={this.deleteTask}
            >
              <FiTrash2 /> Delete
            </DeleteButton>
          }
          <div className={styles['btn-group']}>
            <SaveButton 
              className={styles['editor-btn']}
              size="sm"
              spinnerSize="sm" 
              spinnerColor="light"
              color="primary" 
              isPending={saving}
              onClick={this.submit}
            >
              Save
            </SaveButton>
            <Button
              className={styles['editor-btn']} 
              size="sm" 
              color="secondary" 
              onClick={onToggle}
            >
              Cancel
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    );
  }
}

export default TaskEditor;