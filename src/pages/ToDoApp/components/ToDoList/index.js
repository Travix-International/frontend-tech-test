import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ToDoItem from './components/ToDoItem/index';
import { toggleToDo, deleteToDo } from '../../../../redux/actions/index';

class ToDoList extends Component {
    render() {
        return (
            <ul>
                {this.props.toDoList.map(toDo =>
                    (<ToDoItem
                        key={toDo.id}
                        toDo={toDo}
                        toggleToDO={() => this.props.actions.toggleToDo(toDo.id)}
                        deleteToDO={() => this.props.actions.deleteToDO(toDo.id)}
                    />))}
            </ul>
        );
    }
}

const mapStateToProps = ({toDoList}) => ({toDoList});
const mapDispatchToProps = dispatch => ({
    actions: {
        toggleToDo: bindActionCreators(id => toggleToDo(id), dispatch),
        deleteToDO: bindActionCreators(id => deleteToDo(id), dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
