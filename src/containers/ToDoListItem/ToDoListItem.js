import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

class ToDoListitem extends Component {
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
            <li>
                {this.state.editing ?
                    <input
                        type="text"
                        ref={el => el && el.focus()}
                        onChange={this.changeHandler}
                        value={this.state.value}
                        onKeyDown={this.saveHandler}
                        onBlur={() => this.setState({ editing: false })}
                    /> :
                    <Fragment>
                        <input
                            type="checkbox"
                            checked={toDo.completed}
                            onChange={toggleToDo}
                        />
                        <div
                            onDoubleClick={this.doubleClickHandler}
                        >
                            {toDo.title}
                        </div>
                        <button
                            onClick={deleteToDo}
                        />
                    </Fragment>
                }
            </li>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    editToDoItem: (id, title) => dispatch(actions.editToDoItem(id, title)),
})

export default connect(null, mapDispatchToProps)(ToDoListitem);