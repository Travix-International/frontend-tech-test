import React, {Component} from 'react';

class AddTaskInput extends Component {

    constructor(props) {
        super(props);
        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleAddTask(event) {
        event && event.preventDefault();
        const title = event.target.inputTodoTitle.value;
        this.props.addNewTask(title);
        event.target.inputTodoTitle.value = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddTask}>
                    <input name="inputTodoTitle" type="text" placeholder="Add your new task here" />
                </form>
            </div>
        )
    }
}

export default AddTaskInput;