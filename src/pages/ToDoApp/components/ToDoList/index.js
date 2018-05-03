import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ToDoItem from './components/ToDoItem/index';
import { getToDoItems, toggleToDo, deleteToDoItem } from '../../../../redux/actions/index';

class ToDoList extends Component {
    componentWillMount() {
        this.props.actions.getToDoItems();
    }
    render() {
        return (
            <ul>
                {this.props.toDoList.map(toDo =>
                    (<ToDoItem
                        key={toDo.id}
                        toDo={toDo}
                        toggleToDO={() => this.props.actions.toggleToDo(toDo.id)}
                        deleteToDO={() => this.props.actions.deleteToDoItem(toDo.id)}
                    />))}
            </ul>
        );
    }
}

const mapStateToProps = ({toDoList}) => ({toDoList});
const mapDispatchToProps = dispatch => ({
    actions: {
        getToDoItems: bindActionCreators(getToDoItems, dispatch),
        toggleToDo: bindActionCreators(toggleToDo, dispatch),
        deleteToDoItem: bindActionCreators(deleteToDoItem, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
