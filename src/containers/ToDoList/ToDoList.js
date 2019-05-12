import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToDoListItem from './ToDoListItem/ToDoListItem';
import * as actions from '../../store/actions/index';
import './ToDoList.scss';

class ToDoList extends Component {
    componentWillMount() {
        this.props.getToDoItems();
    }
    render() {
        return (
            <ul className="toDoList">
                {this.props.toDoList.map(toDo =>
                    (<ToDoListItem
                        key={toDo.id}
                        toDo={toDo}
                        toggleToDo={() => this.props.toggleToDoItem(toDo.id)}
                        deleteToDo={() => this.props.deleteToDoItem(toDo.id)}
                    />))}
            </ul>
        );
    }
};

const mapStateToProps = ({toDoList}) => ({toDoList});

const mapDispatchToProps = dispatch => ({
    getToDoItems: () => dispatch(actions.getToDoItems()),
    toggleToDoItem: id => dispatch(actions.toggleToDoItem(id)),
    deleteToDoItem: id => dispatch(actions.deleteToDoItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);