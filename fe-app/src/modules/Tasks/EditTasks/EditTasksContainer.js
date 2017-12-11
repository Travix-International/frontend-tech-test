import React from 'react';
import { PropTypes as T } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './EditTasksActions';
import TaskFormComponent from '../TaskFormComponent';

const propTypes = {
  actions: T.object.isRequired,
  taskId: T.string.isRequired,
  isSubmitting: T.bool,
  task: T.object,
};
const mapStateToProps = state => ({
  task: state.EditTasksReducer.task,
  isSubmitting: state.EditTasksReducer.isSubmitting,
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export class EditTasksContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canSubmit: false,
    };

    this.onDisable = this.onDisable.bind(this);
    this.onEnable = this.onEnable.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  componentDidMount() {
    this.props.actions.viewTask(this.props.taskId);
  }

  onDisable() {
    this.setState({ canSubmit: false });
  }

  onEnable() {
    this.setState({ canSubmit: true });
  }

  onUpdate(payload) {
    this.props.actions.editTask(this.props.taskId, payload);
  }

  render() {
    return (
      <TaskFormComponent
        buttonTitle={
          this.props.isSubmitting ? 'Updating...' : 'Update'
        }
        canSubmit={this.state.canSubmit}
        isSubmitting={this.props.isSubmitting}
        onDisable={this.onDisable}
        onEnable={this.onEnable}
        onValidSubmit={this.onUpdate}
        task={this.props.task}
      />
    );
  }
}

EditTasksContainer.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(EditTasksContainer);
