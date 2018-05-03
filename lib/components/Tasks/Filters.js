import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as filterActions from '../../actions/filterActions';

class Filters extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    showCompleted: PropTypes.bool.isRequired,
  };

  handleChange = () => {
    this.props.actions.toggleShowCompleted();
  };

  render() {
    const { showCompleted } = this.props;
    return (
      <section>
        <label htmlFor="show-completed">
          <input
            checked={showCompleted}
            id="show-completed"
            name="show-completed"
            onChange={this.handleChange}
            type="checkbox"
          />
          Show completed tasks
        </label>
      </section>
    );
  }
}

const mapStateToProps = ({ showCompleted }) => ({ showCompleted });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(filterActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
