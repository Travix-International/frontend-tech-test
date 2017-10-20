import React, { Component } from 'react';

class ToDo extends Component{
    render(){
        return(
            <li>
                {this.props.task.title}
            </li>
        );
    }
}

export default ToDo;