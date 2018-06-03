import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTask extends React.Component {

  handleSubmit(e){

      let newTaskText = this.refs.newTaskText.value;
      this.refs.newTaskText.value = '';
      let newTaskDescription = this.refs.newTaskDescription.value;
      this.refs.newTaskDescription.value = '';

      this.props.add({'text': newTaskText, 'description': newTaskDescription });

      console.log(newTaskText + " " + newTaskDescription);
  }
  render(){
    return (
      <div>
        <div>
          <input type="text" ref="newTaskText" className="form-control" placeholder="New Task Text" />
        </div>
        <div>
          <input type="text" ref="newTaskDescription" className="form-control" placeholder="New Task Description"   />
        </div>
        <div>
          <button onClick={this.handleSubmit.bind(this)} ></button>
        </div>
      </div>
    )
  }
}

AddTask.propTypes = {
  add: PropTypes.func.isRequired
}
