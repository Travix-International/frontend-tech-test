import React from 'react';
import { PropTypes as T } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './AddTasksActions';
import AddTasksComponent from './AddTasksComponent';

const propTypes = {
  actions: T.object.isRequired,
  isSubmitting: T.bool,
};
const mapStateToProps = state => ({
  isSubmitting: state.AddTasksReducer.isSubmitting,
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export class AddTasksContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canSubmit: false,
    };

    this.onDisable = this.onDisable.bind(this);
    this.onEnable = this.onEnable.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onDisable() {
    this.setState({ canSubmit: false });
  }

  onEnable() {
    this.setState({ canSubmit: true });
  }

  onSubmit(payload) {
    this.props.actions.addTasks(payload);
  }

  render() {
    return (
      <AddTasksComponent
        canSubmit={this.state.canSubmit}
        isSubmitting={this.props.isSubmitting}
        onDisable={this.onDisable}
        onEnable={this.onEnable}
        onValidSubmit={this.onSubmit}
      />
    );
  }
}

AddTasksContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(AddTasksContainer);
