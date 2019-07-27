import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import AddToDo from './AddToDo';
import TodoList from './TodoList';
import Notification, { NOTIFICATION_POSITION } from 'sleek-ui/Notification';
import {
    validateTransfer
} from 'utils/misc';

import {
    addToDo,
    deleteToDo,
    transferTask,
    updateTask
} from './actions';

const OuterBlock = styled.div`
    margin: 0 auto;
    background-color: aliceblue;
    
    width: 100vw;
`;

const Header = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    font-size: 40px;
`;

const Block = styled.div`    
`;
const TodoBoard = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100vw;
`;
class Root extends React.Component {
    
    constructor(props) {
        super(props);
        this.dragStartMemo = {};
        this.dragEndMemo = {};
    }

    attachDragStart = (id, type) => {
        if (!this.dragStartMemo[id]) {
            this.dragStartMemo[id] = this.onDragStart.bind(null, id, type);
        }
        return this.dragStartMemo[id];
    }

    attachDragEnd = (type) => {
        if (!this.dragEndMemo[type]) {
            this.dragEndMemo[type] = this.onDropEnd.bind(null, type);
        }
        return this.dragEndMemo[type];
    }

    onDragStart = (id, type) => {
        this.setState({
            itemDraggedId: id,
            itemDraggedType: type
        });
    }

    onDropEnd = (type, event) => {
        event.preventDefault();
        const {
            itemDraggedId,
            itemDraggedType
        } = this.state;
        const sourceType = itemDraggedType;
        const targetType = type;
        if (validateTransfer(sourceType, targetType)) {
            this.props.transferTask(
                itemDraggedId,
                itemDraggedType,
                type
            );
        } else {
            Notification.add(NOTIFICATION_POSITION.TOP_RIGHT, {
                type: 'error',
                title: 'Operation not allowed',
                content: `Task cannot be moved from ${sourceType} to ${targetType} state.`,
                state: 'warning',
                key: 'error-notification'
            })
        }
    }

    renderToDoList = (key, type, label, showEdit, showDelete, isDraggable) => {
        return (
            <TodoList
                key={key}
                type={type}
                deleteToDo={this.props.deleteToDo}
                label={label}
                showEdit={showEdit}
                showDelete={showDelete}
                attachDragStart={this.attachDragStart}
                attachDragEnd={this.attachDragEnd}
                draggable={isDraggable}
                updateTask={this.props.updateTask}
            />
        );
    }

    render() {
        const {
            addToDo,
            taskCreateInProgress
        } = this.props;
        return (
            <OuterBlock>
                <Header>Todo App</Header>
                <Block>
                    <AddToDo
                        addToDo={addToDo}
                        taskCreateInProgress={taskCreateInProgress}
                    />
                    <TodoBoard>
                        {this.renderToDoList('draft', 'DRAFT', 'Draft', true, true, true)}
                        {this.renderToDoList('inprogress', 'IN_PROGRESS', 'In Progress', false, true, true)}
                        {this.renderToDoList('completed', 'COMPLETED', 'Completed', false, true, false)}
                    </TodoBoard>
                </Block>
            </OuterBlock>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        taskCreateInProgress: state.todos.taskCreateInProgress
    };
};

const mapDispatchToProps = (dispatch) => ({
    addToDo: (title, desc) => dispatch(addToDo(title, desc)),
    deleteToDo: (id, type) => dispatch(deleteToDo(id, type)),
    transferTask: (id, sourceType, targetType) =>
        dispatch(transferTask(id, sourceType, targetType)),
    updateTask: (id, type, title) =>
        dispatch(updateTask(id, type, title))
});


export default connect(mapStateToProps, mapDispatchToProps)(Root);