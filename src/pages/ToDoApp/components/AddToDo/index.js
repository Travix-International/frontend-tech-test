import React, { Component } from 'react';
import { addToDo } from '../../../../redux/actions/index';
import { connect } from 'react-redux';


class AddToDo extends Component {

    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    };

    handleClick = () => {
        const { add } = this.props;
        add(this.state.value)
    };

    render() {
        return (
            <div>
                <input type="text"
                       className="to-do-input"
                       placeholder="input ToDo"
                       onChange={this.handleChange}
                />
                <button className="add-to-do" onClick={this.handleClick}>Add ToDo</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    add: text => dispatch(addToDo(text))
});

export default connect(null, mapDispatchToProps)(AddToDo);
