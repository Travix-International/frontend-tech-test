import React, { ChangeEvent } from 'react';
import Todo from '@models/Todo';
import Button from '@components/Button';
import styles from './index.scss';

interface Props {
    title?: Todo['title'];
    description?: Todo['description'];
    okText?: React.ReactNode;
    cancelText?: React.ReactNode;
    onOk?: (title: string, description: string) => void;
    onCancel?: () => void;
}

interface State {
    title: Todo['title'];
    description: Todo['description'];
}

class TodoForm extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            title: props.title || '',
            description: props.description || '',
        };
    }

    render() {
        const { okText = 'Ok', cancelText = 'Cancel' } = this.props;
        const { title, description } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.field}>
                        <input name="title" type="text" placeholder="Write your title here" value={title} onChange={this.handleFieldChange} />
                    </div>
                    <div className={styles.field}>
                        <input name="description" type="text" placeholder="Description..." value={description} onChange={this.handleFieldChange} />
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button type="icon">{okText}</Button>
                    <Button type="icon" onClick={this.handleCancelClick}>{cancelText}</Button>
                </div>
            </form>
        );
    }

    private handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState((prevState) => ({ ...prevState, [name]: value }));
    };

    private handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const { title, description } = this.state;
        if (!title) {
            // @TODO: handle form validation UI
            alert('Title cannot be empty!');
            return;
        }

        if (this.props.onOk) {
            this.props.onOk(title, description);
        }
    };

    private handleCancelClick = () => {
        if (this.props.onCancel) {
            this.props.onCancel();
        }
    };
}

export default TodoForm;