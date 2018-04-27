import React, { Component } from 'react';
import ToDoItem from './components/ToDoItem/index';
import { connect } from 'react-redux';
import { toggleToDo } from '../../../../redux/actions/index';

class ToDoList extends Component {

    render() {
        return (
            <div>
                {this.props.toDoList.map(toDo => <ToDoItem key={toDo.id} toDo={toDo} onClick={this.handleClick}/>)}
            </div>
        )
    }
}

const mapStateToProps = ({toDoList}) => ({toDoList});
const mapDispatchToProps = dispatch => ({
    toggle: id => dispatch(toggleToDo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
