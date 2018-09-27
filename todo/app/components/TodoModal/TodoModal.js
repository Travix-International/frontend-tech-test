import React from 'react';
import { connect } from 'react-redux';

/**
 * @author Syed Aibad Hashmi
 * @description Housing component forn Todo Modal
 */
export class TodoModal extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            todo: {
                id: props.todo.id,
                title: props.todo.title,
                description: props.todo.description
            }
        }

        this.handleDescription = this.handleDescription.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    handleTitleChange (e) {
        const todo = this.state.todo;
        todo.title = e.target.value;
        this.props.todo.title = todo.title;
        this.setState({
            todo: todo
        });
    }

    handleDescription (e) {
        const todo = this.state.todo;
        todo.description = e.target.value;
        this.props.todo.description = todo.description;
        this.setState({
            todo: todo
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-8 col-lg-8 col-sm-offset-2 col-md-offset-2 col-lg-offset-2">
                        <div className="todo-modal">
                            <div className="form-group">
                                <input type="text" className="form-control" value={this.props.todo.title} onChange={this.handleTitleChange} placeholder="Title"></input>
                            </div>
                            <div className="form-group">
                                <textarea rows="5" className="form-control" value={this.props.todo.description} onChange={this.handleDescription} placeholder="Description"></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-default btn-save" onClick={this.props.handleSave}>save</button>
                                <button type="submit" className="btn btn-default btn-cancel" onClick={this.props.closeModal}>cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps)(TodoModal);