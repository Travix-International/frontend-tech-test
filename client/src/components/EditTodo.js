import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchIndividualTodo, updateTodo } from '../actions';
import Button from './Button';
import Anchor from './Anchor';

export class EditTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            description: ''
        }
    }

    handleEdit = e => {
        e.preventDefault();
        this.props.updateTodo(this.state.id, this.state.title, this.state.description);
        this.props.history.push('/');
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentWillMount() {
        this.props.fetchIndividualTodo(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.getTodoTask.id,
            title: nextProps.getTodoTask.title,
            description: nextProps.getTodoTask.description
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleEdit}>
                    <input type="hidden" required
                        name="id" value={this.state.id || ''} />
                    <h4 className="other-title">Update task</h4>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" required
                            name="title" ref="title" value={this.state.title || ''}
                            onChange={e => this.handleChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control" required
                            name="description" ref="description" value={this.state.description || ''}
                            onChange={e => this.handleChange(e)} />
                    </div>
                    <div className="text-center">
                        <div className="btn-group" role="group">
                            <Anchor className="btn btn-light mr-4" to="/" text="Back"/>
                            <Button type="submit" className="btn btn-primary" text="Update"/>
                        </div>
                    </div>
                </form >
            </div >
        );
    }
}

EditTodo.propTypes = {
    fetchIndividualTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        getTodoTask: state.getTodoList.task
    }
}

const mapDispatchToProps = {
    fetchIndividualTodo,
    updateTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);