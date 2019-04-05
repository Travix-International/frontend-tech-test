import React from 'react';
import Todo from '@models/Todo';
import { getDate, getWeekday } from '@utils/time';
import Button from '@components/Button';
import TodoList from '@components/TodoList';
import AddTodoForm from '@components/AddTodoForm';
import Card from '@components/Card';
import Empty from '@components/Empty';
import Spin from '@components/Spin';
import Error from '@components/Error';
import styles from './index.scss';

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
    private addFormRef = React.createRef<HTMLDivElement>();
    private scrollBoxRef = React.createRef<HTMLDivElement>();

    constructor(props: Props) {
        super(props);
        this.state = {
            addTodoFormOpen: false,
        };
    }

    componentDidMount() {
        this.props.fetchTodos();
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        // When toggling on the addTodoForm,
        // wait after its DOM is updated, get its position and scroll to it. 
        if (this.state.addTodoFormOpen && !prevState.addTodoFormOpen) {
            this.scrollToAddTodoForm();
        }
    }

    render() {
        const { addTodoFormOpen } = this.state;
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.date}>
                        <h3>{getDate()}</h3>
                        <p>{getWeekday()}</p>
                    </div>
                    <Button type="primary" onClick={this.toggleAddTodoForm}>add</Button>
                </div>
                <div className={styles.scrollBox} ref={this.scrollBoxRef}>
                    <div className={styles.content}>
                        {this.renderContent()}
                        <div ref={this.addFormRef}>
                            {addTodoFormOpen && (
                                <Card>
                                    <AddTodoForm onAdd={this.handleAdd} onCancel={this.toggleAddTodoForm} />
                                </Card>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private renderContent = () => {
        const { error, pending, todos, toggleTodo, editTodo, deleteTodo } = this.props;
        if (error) {
            return <Error />;
        }
        if (pending) {
            return <Spin />;
        }
        if (!todos.length) {
            return <Empty />;
        }

        return <TodoList todos={todos} onToggle={toggleTodo} onEdit={editTodo} onDelete={deleteTodo} />;
    };

    private handleAdd = (title: string, description: string) => {
        this.props.addTodo(title, description);
        this.toggleAddTodoForm();
    };

    private toggleAddTodoForm = () => {
        this.setState((prevState) => ({ addTodoFormOpen: !prevState.addTodoFormOpen }));
    };

    private scrollToAddTodoForm = () => {
        const scrollBoxDOM = this.scrollBoxRef.current;
        const formDOM = this.addFormRef.current;
        if (scrollBoxDOM && formDOM) {
            scrollBoxDOM.scrollTo(0, formDOM.offsetTop + formDOM.offsetHeight);
            formDOM.focus();
        }
    };
}

export default TodoDashboard;