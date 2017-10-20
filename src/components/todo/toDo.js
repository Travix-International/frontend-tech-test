import React, { Component } from 'react';

class ToDo extends Component{
    render(){
        return(
            
            <tr>
                <td>
                    {this.props.task.title}
                </td>
                <td>
                    {this.props.task.description}
                </td>
            </tr>
        );
    }
}

export default ToDo;