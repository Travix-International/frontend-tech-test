import React, {Component} from 'react';

class TaskEdit extends Component {

    constructor(props) {
        super(props);
        this.handleEditTask = this.handleEditTask.bind(this);
    }

    handleEditTask(id, event) {
        event && event.preventDefault();
        const title = event.target.inputTodoTitleEdit.value;
        const description = event.target.inputTodoDescriptionEdit.value;
        const completed = event.target.inputTodoCompletedEdit.value;

        console.log('coming here', id, title, description, completed)
        this.props.updateTask(id, title, description, completed);
        event.target.inputTodoTitleEdit.value = '';
        event.target.inputTodoDescriptionEdit.value = '';
        this.props.closeEditTask(id);
    }

    render() {
        const taskId = this.props.editqueue.queue.slice(-1)[0];
        const task = this.props.tasks.find(t => t.id === taskId);

        return (
            <div className="blocker current" onClick={(event)=>{
                    this.props.closeEditTask(taskId);
            }}>
                <div className="modal" onClick={(event)=>{
                    event.stopPropagation()
                }}>
                    <h2>Edit task ID: {task && task.id}</h2>
                    <form onSubmit={this.handleEditTask.bind(this, taskId)}>
                        <input id="inputTodoTitleEdit" name="inputTodoTitleEdit" type="text" defaultValue={task && task.title} />
                        <input id="inputTodoDescriptionEdit" name="inputTodoDescriptionEdit" type="text" defaultValue={task && task.description}  />
                        <input id="inputTodoCompletedEdit" name="inputTodoCompletedEdit" type="hidden" defaultValue={task && task.completed} />
                        <input className="btn light" type="submit" name="submit" value="Update Task" />
                    </form>
                </div>
            </div>
        )
    }
}

export default TaskEdit;