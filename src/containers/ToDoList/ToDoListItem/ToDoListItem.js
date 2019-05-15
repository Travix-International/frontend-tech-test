import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import './ToDoListItem.scss';

export class ToDoListItem extends Component {
    state = {
        editing: false,
        value: '',
    };
    
    doubleClickHandler = () => {
        this.setState({
            editing: true,
            value: this.props.toDo.title,
        });
    };
    changeHandler = e => {
        this.setState({
            value: e.target.value,
        });
    };
    saveHandler = e => {
        if (e.which === 13) {
            this.props.editToDoItem(this.props.toDo.id, this.state.value);
            this.setState({ editing: false });
        }
    };

    render() {
        const { toDo, toggleToDo, deleteToDo } = this.props;
        return (
            <li className={`toDo ${toDo.completed ? 'completed' : ''}`}>
                {this.state.editing ?
                    <input
                        type="text"
                        ref={el => el && el.focus()}
                        className="editing"
                        onChange={this.changeHandler}
                        value={this.state.value}
                        onKeyDown={this.saveHandler}
                        onBlur={() => this.setState({ editing: false })} /> :
                    <div>
                        <input
                            type="checkbox"
                            className="toggle"
                            checked={toDo.completed}
                            onChange={toggleToDo} />
                        <div
                            className="title"
                            onDoubleClick={this.doubleClickHandler} >
                            {toDo.title}
                        </div>
                        <button
                            className="delete"
                            onClick={deleteToDo} />
                    </div>
                }
            </li>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    editToDoItem: (id, title) => dispatch(actions.editToDoItem(id, title)),
})

export default connect(null, mapDispatchToProps)(ToDoListItem);