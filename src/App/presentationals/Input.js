import React from 'react';

class Input extends React.Component {
  
  onEnter(e) {

    if(e.key === 'Enter') {
      e.preventDefault();
      this.props.onEnter(e.target.value);
      e.target.value = '';
    }
    
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Enter your task here" onKeyUp={this.onEnter.bind(this)} />
      </div>
    )
  }
}

export default Input