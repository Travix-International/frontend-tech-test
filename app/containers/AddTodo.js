/**
 * Created by NarsFam on 08.07.2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewTodo } from '../actions'

class AddTodo extends Component {
    componentDidMount() {
        this.props.addNewTodoProp(" aaaaaaaaaaaaaaaaaa  aaaaaaaaa");
        this.props.addNewTodoProp(" bbbbbbbbbbbbbbbbbbbbbbb  bbbbbbbbbb")
    }

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
                        //dispatch(addNewTodo(input.value));
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
    return {
        // hasErrored: state.fetchingFailed,
        // isLoading: state.isLoading,
        // todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addNewTodoProp: (text) => dispatch(addNewTodo(text))
    }
};

AddTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo);

export default AddTodo