import React from 'react';
import { connect } from 'react-redux';

/**
 * @author Syed Aibad Hashmi
 * @description Housing component forn Todo item
 */
export class Todo extends React.Component {

    constructor (props) {
        super(props);

        this.handleEdit = this.handleEdit.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    handleEdit () {
        this.props.editTodoModal({
            id: this.props.id,
            title: this.props.title,
            description: this.props.description
        });
    }

    deleteTodo () {
        this.props.deleteTodo(this.props.id);
    }

    render() {
        return (
            <div className="todo-feed-item">
                <h3>
                    {this.props.title}
                </h3>
                <p>
                    {this.props.description}
                </p>
                <div className="todo-action">
                    <button type="button" className="btn btn-default" onClick={this.handleEdit.bind(this)}>
                        <i className="material-icons">edit</i>
                    </button>
                    <button type="button" className="btn btn-default" onClick={this.deleteTodo.bind(this)}>
                        <i className="material-icons">delete</i>
                    </button>
                </div>
            </div>
        );
    };

}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps)(Todo);