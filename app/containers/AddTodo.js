/**
 * Created by NarsFam on 08.07.2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {

    render() {
        let input;

        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        if (!input.value.trim()) {
                            return
                        }
                       this.props.addNewTodoProp(input.value);
                        input.value = '';
                    }}
                >
                    <div className="form-group">
                        <input className="form-control col-md-6"
                               ref={node => {
                                   input = node
                               }}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-info" style={{marginTop:"15px"}}>
                            Add
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { }
};

const mapDispatchToProps = dispatch => {
    return {
        addNewTodoProp: (text) => dispatch(addTodo(text))
    }
};

AddTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo);

export default AddTodo