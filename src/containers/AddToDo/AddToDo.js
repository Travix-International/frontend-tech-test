import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import './AddToDo.scss';

export class AddToDo extends Component {
    
    state = {
        value: ''
    }
    
    changehandler = e => {
        this.setState({
            value: e.target.value,
        });
    };

    clickHandler = () => {
        this.props.add(this.state.value);
        this.setState({value: ''})
    };

    render() {
        return (
            <form
                className="toDoForm"
                onSubmit={e => e.preventDefault()} >
                <input
                    type="text"
                    className="toDoInput"
                    placeholder="I want to..."
                    value={this.state.value}
                    onChange={this.changehandler} />
                <button
                    className="addToDo"
                    onClick={this.clickHandler} >
                    Add ToDo
                </button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    add: title => dispatch(actions.addToDoItem(title)),
});

export default connect(null, mapDispatchToProps)(AddToDo);