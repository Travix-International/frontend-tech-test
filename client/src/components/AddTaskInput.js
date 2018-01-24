import React, {Component} from 'react';

class AddTaskInput extends Component {

    constructor(props) {
        super(props);
        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleAddTask(event) {
        event && event.preventDefault();
        const title = event.target.inputTodoTitle.value;
        const desc = event.target.inputTodoDescription.value;

        this.props.addNewTask(title, desc);
        event.target.inputTodoTitle.value = '';
        event.target.inputTodoDescription.value = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddTask}>
                    <input id="inputTodoTitle" name="inputTodoTitle" type="text" placeholder="+ Add your new task here" />
                    <input id="inputTodoDescription" name="inputTodoDescription" type="text" placeholder="add description" />
                    <input className="btn light" type="submit" name="submit" value="Add Task" />
                </form>
            </div>
        )
    }
}

export default AddTaskInput;