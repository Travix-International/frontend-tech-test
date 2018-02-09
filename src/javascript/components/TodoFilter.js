import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToggleButton } from 'travix-ui-kit';

import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';

class TodoFilter extends Component {
  constructor() {
    super();

    this.filters = [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED];
    this.state = {
      selectedIndex: 0,
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e, selectedIndex) {
    const { setVisibilityFilter } = this.props;
    this.setState({ selectedIndex });

    setVisibilityFilter(this.filters[selectedIndex]);
  }

  render() {
    return (
      <div className="mb-10">
        <ToggleButton
          handleSelect={this.handleSelect}
          items={['All', 'Active', 'Completed']}
          selectedIndex={this.state.selectedIndex}
        />
      </div>
    );
  }
}

TodoFilter.propTypes = {
  setVisibilityFilter: PropTypes.func.isRequired,
};

export default TodoFilter;
