import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Input,
  Button,
  Modal,
  ModalContent
} from 'travix-ui-kit';
import { createTravixTask, updateTravixTask, getTravixTask, deleteTravixTask } from './TEactions';

import './TravixtaskEditor.scss';

class TravixtaskEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: props.task , modelopenstate:props.editmodalstate };
    this.titleChange = this.titleChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.closeTask = this.closeTask.bind(this);
    this.slidingPanelRef = React.createRef();
  }

  componentWillReceiveProps(props) {
    this.setState({ modelopenstate: props.editmodalstate,task:props.task });
  
  }

  titleChange(event) {
    const title = event.target.value;
    this.setState({
      task: { ...this.state.task, title },
    });
  }

  descriptionChange(event) {
    const description = event.target.value;
    this.setState({
      task: { ...this.state.task, description },
    });
  }

  closeTask(event){

  }
  
  saveChanges() {
    if (!this.state.task.id) this.props.createTask(this.state.task);
    else this.props.updateTravixTask(this.state.task, () => this.props.onChange());
  }

  deleteTask() {
    this.props.deleteTravixTask(this.state.task.id, () => this.props.onChange());
  }

  render() {
    if (this.props.inProgress) return null;
   
    return (
      <Modal active={this.state.modelopenstate} title={<header><span className="modal-header">Save Task</span></header>} overlay closeOnEsc={false}  closeOnOverlayClick={false} fullscreen={false} closable={true} footer={(
        <div>
          <Button className="TaskEditor__saveButton" key="2" onClick={this.saveChanges} size="s">
            Save
          </Button>
          <Button onClick={() => this.setState({ modelopenstate: false })} key="1" size="s" className="ml-2rem">
            Close
          </Button>
          {this.state.task.id && (
            <Button
              className="TaskEditor__deleteButton ml-2rem"
              key="3"
              onClick={this.deleteTask}
              size="s"
            >
              Delete
            </Button>
          )}
          
        </div>
      )} >
        
        <label>
            Title:
            <Input onChange={this.titleChange} type="text" value={this.state.task.title} />
          </label>
          <br />
          <label>
            Description:
            <Input
              className="SlidingPanel__description"
              multiline
              onChange={this.descriptionChange}
              value={this.state.task.description}
            />
          </label>
      </Modal>

     
    );
  }
}

TravixtaskEditor.propTypes = {
  createTravixTask: PropTypes.func.isRequired,
  deleteTravixTask: PropTypes.func.isRequired,
  inProgress: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onPanelClose: PropTypes.func.isRequired,
  task: PropTypes.shape().isRequired,
  updateTravixTask: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  if (!ownProps.task.id && state.TaskEditorReducer.task.id > 0)
    return {
      inProgress: state.TaskEditorReducer.inProgress,
      task: state.TaskEditorReducer.task,
    };
  return {
    inProgress: state.TaskEditorReducer.inProgress,
    task: ownProps.task,
  };
};

export default connect(mapStateToProps, {
  createTravixTask,
  updateTravixTask,
  getTravixTask,
  deleteTravixTask,
})(TravixtaskEditor);
