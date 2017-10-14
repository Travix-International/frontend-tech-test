import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions as sampleActions } from '../../redux/modules/sampleActions';

class TodosView extends Component {
  static propTypes = {
    sampleActions: PropTypes.object.isRequired,
    message: PropTypes.string.isRequired
  }
  render() {
    return (
      <p className="app-intro">
        Hello World! <br />
      </p>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sampleActions: bindActionCreators(sampleActions, dispatch)
});

const mapStateToProps = (state) => ({
  message: state.sampleActions.message
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosView);
