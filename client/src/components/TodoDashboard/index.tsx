import React from 'react';
import Todo from '@models/Todo';
import Button from '@components/Button';
import TodoList from '@components/TodoList';
import AddTodoForm from '@components/AddTodoForm';
import { toggleTodo } from '@services/todoApi';

interface Props {
    todos: Todo[];
    pending: boolean;
    error: string | null;
    fetchTodos: () => void;
    addTodo: (title: string, description: string) => void;
    editTodo: (id: Todo['id'], data: { title: string, description: string }) => void;
    deleteTodo: (id: Todo['id']) => void;
    toggleTodo: (id: Todo['id']) => void;
}

interface State {
    addTodoFormOpen: boolean;
}

class TodoDashboard extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            addTodoFormOpen: false,
        };
    }

    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        const { addTodoFormOpen } = this.state;
        const { todos, pending, error, editTodo, deleteTodo, addTodo, toggleTodo } = this.props;
        return (
            <div>
                <div className="header">
                    <Button onClick={this.toggleAddTodoForm}>add</Button>
                </div>
                {error && <p>{error}</p>}
                {pending && <div>loading...</div>}
                {!error && !pending && <TodoList todos={todos} onToggle={toggleTodo} onEdit={editTodo} onDelete={deleteTodo} />}
                {addTodoFormOpen && <AddTodoForm onAdd={addTodo} onCancel={this.toggleAddTodoForm} />}
            </div>
        );
    }

    private toggleAddTodoForm = () => {
        this.setState((prevState) => ({ addTodoFormOpen: !prevState.addTodoFormOpen }));
    };
}

export default TodoDashboard;