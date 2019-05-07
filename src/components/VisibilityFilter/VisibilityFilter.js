import React from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from 'reactstrap';

class VisibilityFilter extends React.PureComponent {
  static propTypes = {
    filters: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      })
    ).isRequired,
    currentFilter: PropTypes.string.isRequired,
    setFilter: PropTypes.func
  }

  static defaultProps = {
    setFilter: () => {}
  }

  constructor (props) {
    super(props);
    this.state = {
      filterOpen: false,
    };
  } 

  toggleFilterMenu = e => {
    this.setState(prevState => ({
      filterOpen: !prevState.filterOpen
    }));
  }

  onFilterChange = value => e => {
    this.props.setFilter(value);
  }

  renderFilterOptions = filters => {
    const { currentFilter } = this.props;
    return filters.map((filter, ind) => (
      <DropdownItem 
        key={`${filter.value}_${ind}`}
        active={currentFilter === filter.value}
        onClick={this.onFilterChange(filter.value)}
      >
        {filter.title}
      </DropdownItem>
    ));
  }

  render () {
    const { filters } = this.props;

    return (
      <Dropdown 
        isOpen={this.state.filterOpen}
        toggle={this.toggleFilterMenu}
      >
        <DropdownToggle caret nav>
          Filter
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Show Tasks</DropdownItem>
          { this.renderFilterOptions(filters) }
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default VisibilityFilter;