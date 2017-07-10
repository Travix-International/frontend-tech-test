/**
 * Created by NarsFam on 08.07.2017.
 */
import React from 'react'
import {connect} from 'react-redux'
import {addNewTodo} from '../actions'

let AddTodo = ({dispatch}) => {
    let input;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addNewTodo(input.value));
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
};
AddTodo = connect()(AddTodo);

export default AddTodo