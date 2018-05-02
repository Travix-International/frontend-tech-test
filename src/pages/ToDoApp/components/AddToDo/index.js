import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../../../../redux/actions/index';
import * as styles from './index.scss';


class AddToDo extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
        };
    }

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    handleClick = () => {
        const { add } = this.props;
        add(this.state.value);
    };

    render() {
        return (
            <form
                className={styles.formToDo}
                onSubmit={e => e.preventDefault()}
            >
                <input
                    type="text"
                    className={styles.inputToDo}
                    placeholder="input ToDo"
                    onChange={this.handleChange}
                />
                <button
                    className={styles.addToDo}
                    onClick={this.handleClick}
                >
                    Add ToDo
                </button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    add: text => dispatch(addToDo(text)),
});

export default connect(null, mapDispatchToProps)(AddToDo);
