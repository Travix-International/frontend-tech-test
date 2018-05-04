import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ToDoItem from './components/ToDoItem/index';
import { getToDoItems, toggleToDoItem, deleteToDoItem } from '../../../../redux/actions/index';
import * as styles from './index.scss';

class ToDoList extends Component {
    componentWillMount() {
        this.props.actions.getToDoItems();
    }
    render() {
        return (
            <ul className={styles.toDoList}>
                {this.props.toDoList.map(toDo =>
                    (<ToDoItem
                        key={toDo.id}
                        toDo={toDo}
                        toggleToDo={() => this.props.actions.toggleToDoItem(toDo.id)}
                        deleteToDo={() => this.props.actions.deleteToDoItem(toDo.id)}
                    />))}
            </ul>
        );
    }
}

const mapStateToProps = ({toDoList}) => ({toDoList});
const mapDispatchToProps = dispatch => ({
    actions: {
        getToDoItems: bindActionCreators(getToDoItems, dispatch),
        toggleToDoItem: bindActionCreators(toggleToDoItem, dispatch),
        deleteToDoItem: bindActionCreators(deleteToDoItem, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
