import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createTodo } from '../actions';
import Button from './Button';
import Anchor from './Anchor';

export class CreateTodo extends Component {
    handleCreate = e => {
        e.preventDefault();
        this.props.createTodo(this.refs.title.value, this.refs.description.value);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleCreate}>
                    <h4 className="other-title">Create new task</h4>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" placeholder="Give a title..." required
                            name="title" ref="title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control" placeholder="Add a description..." required
                            name="description" ref="description" />
                    </div>
                    <div className="text-center">
                        <div className="btn-group" role="group">
                            <Anchor className="btn btn-light mr-4" to="/" text="Back"/>
                            <Button type="submit" className="btn btn-primary" text="Create"/>
                        </div>
                    </div>
                </form >
            </div >
        );
    }
}

CreateTodo.propTypes = {
    createTodo: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    createTodo
}

export default connect(null, mapDispatchToProps)(CreateTodo);