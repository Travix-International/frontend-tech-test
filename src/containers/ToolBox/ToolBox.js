import React from 'react';
import { Input, Button } from 'travix-ui-kit';

import './ToolBox.scss';

class ToolBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.searchInput = React.createRef();
    this.searchTask = this.searchTask.bind(this);
  }

  searchTask() {
    this.setState({ searchText: this.searchInput.current.value });
  }

  render() {
    return (
      <div className="ToolBox__wrapper">
        <div className="ToolBox__searchInput">
          <Input placeholder="Task Title" ref={this.searchInput} type="text" />
        </div>
        <Button onClick={this.searchTask} size="s">
          Search
        </Button>
      </div>
    );
  }
}

export default ToolBox;
