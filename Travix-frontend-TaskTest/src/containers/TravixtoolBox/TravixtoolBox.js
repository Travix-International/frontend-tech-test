import React from 'react';
import { Input, Button } from 'travix-ui-kit';
import PropTypes from 'prop-types';
import './TravixtoolBox.scss';

class TravixtoolBox extends React.Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
    this.searchforTask = this.searchforTask.bind(this);
  }

  searchforTask() {
    this.props.searchClick(this.searchInput.current.input.value);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="searchContainer">
          <div className="searchInput">
          <Input placeholder="Task Title" ref={this.searchInput} type="text" className="roudedBorder " />
          </div>
          
        </div>
        <div className="addNewBtnWrapper">
        
        <Button className="searchButton" onClick={this.searchforTask} size="s">
            Search
        </Button>

        <Button className="searchButton mg-lft" onClick={this.props.addNewClick} size="s">
            Add New
        </Button>

        </div>
      </div>
    );
  }
}

TravixtoolBox.propTypes = {
  addNewClick: PropTypes.func.isRequired,
  searchClick: PropTypes.func.isRequired,
};

export default TravixtoolBox;
