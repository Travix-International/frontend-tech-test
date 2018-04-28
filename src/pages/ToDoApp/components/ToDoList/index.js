import React, { Component } from 'react';
import ToDoItem from './components/ToDoItem/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleToDo } from '../../../../redux/actions/index';
import { deleteToDo } from '../../../../redux/actions/index';

class ToDoList extends Component {

    render() {
        console.log(this.props);
        return (
            <ul>
                {this.props.toDoList.map(toDo =>
                    <ToDoItem
                        key={toDo.id}
                        toDo={toDo}
                        toggleToDO={() => this.props.actions.toggleToDo(toDo.id)}
                        deleteToDO={() => this.props.actions.deleteToDO(toDo.id)}
                    />)}
            </ul>
        )
    }
}

const mapStateToProps = ({toDoList}) => ({toDoList});
const mapDispatchToProps = dispatch => ({
    actions : {
        toggleToDo: bindActionCreators(id => toggleToDo(id), dispatch),
        deleteToDO: bindActionCreators(id => deleteToDo(id), dispatch)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
