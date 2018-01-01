import { connect } from 'react-redux';
import { editTodoStart, deleteTodoRequest } from '../../actions/todos';
import Todo from './component';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onEdit: (event) => {
            event.preventDefault();

            dispatch(editTodoStart({
                id: ownProps.id,
                title: ownProps.title,
                description: ownProps.description,
            }));
        },
        onDelete: (event) => {
            event.preventDefault();

            dispatch(deleteTodoRequest({
                id: ownProps.id,
            }));
        },
    };
};

export default connect(null, mapDispatchToProps)(Todo);
