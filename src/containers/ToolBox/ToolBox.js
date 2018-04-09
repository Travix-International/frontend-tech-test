import React from 'react';
import { Input, Button } from 'travix-ui-kit';
import PropTypes from 'prop-types';

import './ToolBox.scss';

class ToolBox extends React.Component {
  constructor(props) {
    super(props);
    this.searchInputRef = React.createRef();
    this.searchTask = this.searchTask.bind(this);
  }

  searchTask() {
    this.props.onSearch(this.searchInputRef.current.input.value);
  }

  render() {
    return (
      <div className="ToolBox__wrapper">
        <div className="ToolBox__searchContainer">
          <div className="ToolBox__searchInput">
            <Input placeholder="Task Title" ref={this.searchInputRef} type="text" />
          </div>
          <Button className="ToolBox__searchButton" onClick={this.searchTask} size="s">
            Search
          </Button>
        </div>
        <div className="ToolBox__addNewBtnWrapper">
          <Button className="ToolBox__addNewBtn" onClick={this.props.onAddNewClicked} size="s">
            Add New
          </Button>
        </div>
      </div>
    );
  }
}

ToolBox.propTypes = {
  onAddNewClicked: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default ToolBox;
