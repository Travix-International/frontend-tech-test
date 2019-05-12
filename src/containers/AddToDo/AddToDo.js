import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import * as styles from './AddToDo.scss';

class AddToDo extends Component {
    
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
                className={styles.toDoForm}
                onSubmit={e => e.preventDefault()} >
                <input
                    type="text"
                    className={styles.toDoInput}
                    placeholder="I want to..."
                    value={this.state.value}
                    onChange={this.changehandler} />
                <button
                    className={styles.addToDo}
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