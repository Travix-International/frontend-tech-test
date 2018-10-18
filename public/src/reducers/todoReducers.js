export function tasklist(state = [], action) {
    var data = action.value;
    switch (action.type) {
        case "tasklist":
            return data.tasks
        case "addsuccess":
            return [
                ...state,
                data.task
            ];
        case 'updatesuccess':
            let newTask = data.task;
            return state.map(task =>
                task.id === newTask.id ? { ...task,
                    text: newTask.text
                } : task
            )
        case 'deletesuccess':
            return state.filter(task =>
                task.id !== data.taskId
            )
        case 'completesuccess':
            return state.map(todo =>
                todo.id === data.taskId ? { ...todo,
                    completed: !todo.completed
                } :
                todo
            )
        default:
            return state;
    }
}