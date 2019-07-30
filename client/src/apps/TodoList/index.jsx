import React, { PropTypes } from 'react';
import { withList } from './withListHoc';
import TextField from 'sleek-ui/Input';
import Loader from 'sleek-ui/Loader';
import Tooltip from 'sleek-ui/Tooltip';
import styled from 'styled-components';
import Notification, { NOTIFICATION_POSITION } from 'sleek-ui/Notification';
import { FixedSizeList as List } from "react-window";


const TodoListBlock = styled.div`
    position: relative;
    padding: 20px;
    flex: 1;
    border: 1px solid #0077CC;
    border-radius: 10px;
    margin: 5px;
    min-width: 320px;
    box-shadow: 0 0 2px 2px #0077CC;

    & > div:first-child {
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: #0077CC;
        position: absolute;
        top: 0;
        left: 0;
        height: 40px;
        color: white;
        line-height: 2.5;
        text-transform: uppercase;
    }
`;

const Title = styled.div`
    font-size: 18px;
    color: #0077CC;

    &.striked {
        text-decoration: line-through;
        color: red;
    }

    &.in_progress {
        color: green;
    }
`;
const Desc = styled.div`
    font-size: 12px;
`;

const ActionBlock = styled.div`
    display: flex;
`;
const Icon = styled.div`
    padding: 8px;
    cursor: pointer;
`;

const Task = styled.div`
    background-color: white;
    color: black;
    padding: 3px;
    padding-left: 10px;
    margin: 5px 0;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    border: 1px solid #0077CC;

    &.striked {
        border: 1px solid red;
    }

    &.in_progress {
        border: 1px solid green;
    }
`;

const Note = styled.div`
    margin-top: 40px;
    padding: 10px;
`;

export class TodoList extends React.PureComponent {
    
    static propTypes = {
        fetchInProgress: PropTypes.bool,
        /**
         * The function to add todo task
         * @type {[function]}
         */
        attachDragEnd: PropTypes.func.isRequired,
        /**
         * The function to delete todo task
         * @type {[function]}
         */
        tasks: PropTypes.object.isRequired,
        /**
         * The function to update todo task
         * @type {[function]}
         */
        updateTask: PropTypes.func.isRequired,
        /**
         * The function to transfer task from one state to another
         * @type {[function]}
         */
        type: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.editMemo = {};
        this.deleteMemo = {};
        this.state = {
            toBeEdited: null,
            updatedTitle: '',
        }
    }


    // Memoized event handlers to prevent return of new event handlers on every render
    attachEdit = (id) => {
        if (!this.editMemo[id]) {
            this.editMemo[id] = this.handleEdit.bind(null, id);
        }
        return this.editMemo[id];
    }

    attachDelete = (id) => {
        if (!this.deleteMemo[id]) {
            this.deleteMemo[id] = this.handleDelete.bind(null, id);
        }
        return this.deleteMemo[id];
    }

    handleEdit = (id) => {
        const currentTask = this.props.tasks && this.props.tasks[id];
        this.setState({
            toBeEdited: id,
            updatedTitle: currentTask && currentTask.title
        });
    }

    handleDelete = (id) => {
        this.props.deleteToDo(id, this.props.type).then(() => {
            Notification.add(NOTIFICATION_POSITION.TOP_RIGHT, {
                type: 'success',
                title: 'Success',
                content: 'Task Deleted successfully.',
                state: 'info',
                key: 'delete-notification'
            })
        });
    }

    discardEdit = () => {
        this.setState({
            toBeEdited: null
        });
    }

    updateTask = (id) => {
        this.props.updateTask(id, this.props.type, this.state.updatedTitle)
            .then(() => {
                this.setState({
                    toBeEdited: null,
                    updatedTitle: ''
                });
                Notification.add(NOTIFICATION_POSITION.TOP_RIGHT, {
                    type: 'success',
                    title: 'Success',
                    content: 'Task updated successfully.',
                    state: 'success',
                    key: 'update-notification'
                })
            });
    }

    onChange = (value) => {
        this.setState({
            updatedTitle: value
        });
    }

    renderTask = ({index, style}) => {
        const task = Object.values(this.props.tasks)[index];
        const className = this.props.type === 'COMPLETED' ? 
        'striked' : this.props.type === 'IN_PROGRESS' ? 
        'in_progress' : '';
        return (
            <div
                style={style}
                draggable={this.props.draggable}
                onDragStart={this.props.attachDragStart(task.id, this.props.type)}
            >
                {
                    this.state.toBeEdited === task.id ?
                    <Task className={className}>
                        <TextField 
                            hintText='Update title'
                            onChange={this.onChange}
                            value={this.state.updatedTitle}
                        />
                        <ActionBlock>
                            {
                                this.props.showEdit ?
                                <Tooltip tooltipContent='Save'>
                                    <Icon onClick={this.updateTask.bind(null, task.id)}>&#10003;</Icon>
                                </Tooltip> : null
                            }
                            {
                                this.props.showDelete ?
                                <Tooltip tooltipContent='Discard'>
                                    <Icon onClick={this.discardEdit}>&#10005;</Icon>
                                </Tooltip> : null
                            }
                        </ActionBlock>
                    </Task> :
                    <Task>
                        <div>
                            <Title className={className}>{task.title}</Title>
                            <Desc>{task.description}</Desc>
                        </div>
                        <ActionBlock>
                            {
                                this.props.showEdit ?
                                <Tooltip tooltipContent='Edit'>
                                    <Icon onClick={this.attachEdit(task.id)}>&#9998;</Icon>
                                </Tooltip> : null
                            }
                            {
                                this.props.showDelete ?
                                <Tooltip tooltipContent='Delete'>
                                    <Icon onClick={this.attachDelete(task.id)}>&#10005;</Icon>
                                </Tooltip> : null
                            }
                        </ActionBlock>
                    </Task>
                }
            </div>
        );
    }

    renderTasks = (tasks) => {
        const tasksArr = Object.values(tasks);
        return (tasksArr || []).map((task, index) => this.renderTask(task, index))
    }

    render() {
        const {
            fetchInProgress,
            tasks,
            label,
            type
        } = this.props;
        const taskHeight = Object.values(this.props.tasks).length * 50;
        const height = taskHeight > 400 ? 400 : taskHeight;
        return (
            <TodoListBlock
                    onDragOver={(event) => event.preventDefault()}
                    onDrop={this.props.attachDragEnd(type)}
                    className={type}
                >
                    <div>{`${label} (${Object.values(tasks).length})`}</div>
                    {
                        fetchInProgress ?
                        <Loader/> :
                        Object.values(tasks).length === 0 ?
                        <Note>No Todos Yet</Note> :
                        <List
                            direction="vertical"
                            className={`List-${type}`}
                            itemCount={Object.values(tasks).length}
                            style={{
                                marginTop: '20px'
                            }}
                            itemSize={50}
                            width={320}
                            height={height}
                            itemData={{
                                tobeEdited: this.state.toBeEdited,
                                updatedTitle: this.state.updatedTitle
                            }}
                        >
                                {this.renderTask}
                        </List>
                    }
                </TodoListBlock>
        );
    }
}

export default withList(TodoList);