import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

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
                <td>
                    <Button bsSize="xsmall" bsStyle="primary"><Glyphicon glyph="pencil"/> </Button>
                </td>
                <td>
                    <Button bsSize="xsmall" bsStyle="danger"><Glyphicon glyph="trash"/> </Button>
                </td>
            </tr>
        );
    }
}

export default ToDo;