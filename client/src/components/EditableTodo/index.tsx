import React from 'react';
import Todo from '@models/Todo';
import TodoItem from '@components/TodoItem';
import EditTodoForm from '@components/EditTodoForm';
import Card from '@components/Card';

interface Props extends Todo{
    onEdit?: (id: Todo['id'], data: { title: Todo['title'], description: Todo['description'] }) => void;
    onDelete?: (id: Todo['id']) => void;
    onToggle?: (id: Todo['id']) => void;
}

interface State {
    editFormOpen: boolean;
}

class EditableTodo extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            editFormOpen: false,
        };
    }

    render() {
        const { id, title, description, done } = this.props;
        const { editFormOpen } = this.state;
        const content = editFormOpen ? (
            <EditTodoForm
                title={title}
                description={description}
                onEdit={this.handleEdit}
                onCancel={this.toggleEdit}
            />
        ) : (
                <TodoItem
                    id={id}
                    title={title}
                    description={description}
                    done={done}
                    onEdit={this.toggleEdit}
                    onDelete={this.handleDelete}
                    onToggle={this.handleToggle}
                />);

        return (
            <Card>
                {content}
            </Card>
        );
    }

    private toggleEdit = () => {
        this.setState(prevState => ({ editFormOpen: !prevState.editFormOpen }));
    };

    private handleEdit = (title: string, description: string) => {
        if (this.props.onEdit) {
            this.props.onEdit(this.props.id, { title, description });
            this.toggleEdit();
        }
    };

    private handleDelete = () => {
        if (this.props.onDelete) {
            this.props.onDelete(this.props.id);
        }
    }

    private handleToggle = () => {
        if (this.props.onToggle) {
            this.props.onToggle(this.props.id);
        }
    };
}

export default EditableTodo;